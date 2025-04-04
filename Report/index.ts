import { isly } from "isly"
import { Label } from "../Label"
import { Header as _Header } from "./Header"
import { Level as _Level } from "./Level"

export interface Report {
	name: string
	label?: Label
	description?: Label
	headers: Report.Header[]
}
export namespace Report {
	export import Header = _Header
	export import Level = _Level
	export const { type, is, flawed } = isly
		.object<Report>({
			name: isly.string(),
			label: Label.type.optional(),
			description: Label.type.optional(),
			headers: Header.type.array(),
		})
		.bind()
}
