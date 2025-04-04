import { isly } from "isly"
import { Account } from "../../Account"
import { Label } from "../../Label"
import { Ranges } from "../Ranges"
import { Translations } from "../Translations"

export interface Header {
	name: string
	label?: Label
	headers?: Header[]
	accounts?: Ranges
}
export namespace Header {
	export const { type, is, flawed } = isly
		.object<Header>({
			name: isly.string(),
			label: Label.type.optional(),
			headers: isly
				.lazy<Header>((): isly.Object<Header> => type, "controvia.Chart.Report.Header")
				.array()
				.optional(),
			accounts: Ranges.type.optional(),
		})
		.rename("controvia.Chart.Report.Header")
		.bind()
	export function get(header: Header, translations: Translations, prefix: string[]): Header {
		const path = [...prefix, header.name]
		const name = path.join(".")
		const headers = header.headers?.map(h => get(h, translations, path))
		const accounts = header.accounts
		return {
			name,
			label: header.label ?? Translations.getLabel(translations, name),
			...(headers ? { headers } : {}),
			...(accounts ? { accounts } : {}),
		}
	}
	export function getPath(levels: Header[], account: Account.Number): string[] | undefined {
		let result: string[] | undefined
		for (const level of levels) {
			const r =
				level.accounts && Ranges.contains(level.accounts, account)
					? []
					: level.headers
					? getPath(level.headers, account)
					: undefined
			if (r) {
				result = [level.name, ...r]
				break
			}
		}
		return result
	}
}
