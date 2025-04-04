import { isly } from "isly"
import { Account } from "../Account"
import { Label } from "../Label"
import { charts } from "./charts"
import { Range as _Range } from "./Range"
import { Ranges as _Ranges } from "./Ranges"
import { Report as _Report } from "./Report"
import { Translation as _Translation } from "./Translation"
import { Translations as _Translations } from "./Translations"
import { Types as _Types } from "./Types"

export interface Chart {
	name: string
	label?: Label
	description?: Label
	accounts: Account.Number[]
	types: Chart.Types
	reports: Chart.Report[]
	labels: Chart.Translations
}
export namespace Chart {
	export import Range = _Range
	export import Ranges = _Ranges
	export import Report = _Report
	export import Translation = _Translation
	export import Translations = _Translations
	export import Types = _Types
	export const { type, is, flawed } = isly
		.object<Chart>({
			name: isly.string(),
			label: Label.type.optional(),
			description: Label.type.optional(),
			accounts: Account.Number.type.array(),
			types: isly.record(Account.Type.type, Ranges.type),
			reports: Report.type.array(),
			labels: Translations.type,
		})
		.bind()
	export function populate(chart: Chart, account: Account): Account {
		const defaults = getAccount(chart, account.number)
		return {
			type: account.type ?? defaults.type,
			number: account.number,
			label: Label.merge(account.label, defaults.label),
			reports: {
				...defaults.reports,
				...account.reports,
			},
		}
	}
	export function getLabel(chart: Chart, name: string | undefined, overrides?: Label): Label {
		return Translations.getLabel(chart.labels, name ?? "unknown", overrides) ?? name
	}
	export function getAccount(chart: Chart, number: Account.Number): Required<Account> {
		return {
			number,
			label: Translations.getLabel(chart.labels, number.toFixed()),
			type: Types.get(chart.types, number) ?? "unknown",
			reports: Object.fromEntries(
				chart.reports
					.map(report => [report.name, Chart.Report.getPath(report, number)] as const)
					.filter((report): report is [string, string[]] => Array.isArray(report[1]))
					?.map(
						([report, path]) =>
							[
								report,
								path.reduce<string[]>(
									(names, name) =>
										[...names, [...(names.length > 0 ? [names[names.length - 1]] : []), name].join(".")] as const,
									[report]
								),
							] as const
					)
					?.map(([report, names]) => [report, names.map(name => ({ name, label: getLabel(chart, name) }))] as const)
			),
		}
	}
	export function getAccounts(chart: Chart): Account[] {
		return chart.accounts.map(number => getAccount(chart, number))
	}
	export function getReport(
		chart: Chart,
		report: string | Chart.Report | undefined
	): Required<Chart.Report> | undefined {
		return typeof report == "string"
			? getReport(
					chart,
					chart.reports.find(r => r.name == report)
			  )
			: report && {
					name: report.name,
					label: report.label ?? getLabel(chart, report.name),
					description: report.description ?? getLabel(chart, `${report.name}.description`),
					headers: report?.headers.map(header => Report.Header.get(header, chart.labels, [report.name])) ?? [],
			  }
	}
	export function getReports(chart: Chart): Required<Chart.Report>[] {
		return chart.reports
			.map(report => getReport(chart, report))
			.filter((report): report is Required<Chart.Report> => !!report)
	}
	export const load = charts.load
}
