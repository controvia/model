import { isoly } from "isoly"
import { isly } from "isly"
import { Creatable as _Creatable } from "./Creatable"

export interface Entry extends Entry.Creatable {
	series: string
	number: string
	registered?: isoly.Date
}
export namespace Entry {
	export import Creatable = _Creatable
	export const { type, is, flawed } = Creatable.type
		.extend<Entry>(
			{
				series: isly.string(),
				number: isly.string(),
				registered: isoly.Date.type.optional(),
			},
			"controvia.Ledger.Journal.Entry"
		)
		.bind()
}
