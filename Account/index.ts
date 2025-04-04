import { isly } from "isly"
import { Label } from "../Label"
import { Header as _Header } from "./Header"
import { Number as _Number } from "./Number"
import { Type as _Type } from "./Type"

export interface Account {
	type?: Account.Type
	number: Account.Number
	label?: Label
	reports?: Record<string, Account.Header[]>
}
export namespace Account {
	export import Header = _Header
	export import Number = _Number
	export import Type = _Type
	export const { type, is, flawed } = isly
		.object<Account>({
			type: Type.type.optional(),
			number: Number.type,
			label: Label.type.optional(),
			reports: isly.record(isly.string(), Account.Header.type.array()).optional(),
		})
		.bind()
}
