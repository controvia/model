import { isly } from "isly"
import { Account } from "../../Account"
import { Label } from "../../Label"
import { Header as _Header } from "./Header"

export interface Report {
	name: string
	label?: Label
	description?: Label
	headers: Report.Header[]
}
export namespace Report {
	export import Header = _Header
	export const { type, is, flawed } = isly
		.object<Report>({
			name: isly.string(),
			label: Label.type.optional(),
			description: Label.type.optional(),
			headers: Header.type.array(),
		})
		.bind()
	export function getPath(report: Report, account: Account.Number): string[] | undefined {
		return Header.getPath(report.headers, account)
	}
}
