import { isoly } from "isoly"
import { isly } from "isly"
import { Transaction } from "../../Transaction"

export interface Creatable {
	date: isoly.Date
	description: string
	transactions: Transaction[]
}
export namespace Creatable {
	export const { type, is, flawed } = isly
		.object<Creatable>(
			{
				date: isoly.Date.type,
				description: isly.string(),
				transactions: isly.array(Transaction.type),
			},
			"controvia.Ledger.Journal.Entry.Creatable"
		)
		.bind()
}
