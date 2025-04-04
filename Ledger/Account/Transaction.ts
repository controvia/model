import { isly } from "isly"
import { Journal } from "../Journal"

export interface Transaction {
	amount: number
	balance: number
	entry: Journal.Entry
}
export namespace Transaction {
	export const { type, is, flawed } = isly
		.object<Transaction>(
			{
				amount: isly.number(),
				balance: isly.number(),
				entry: Journal.Entry.type,
			},
			"controvia.Ledger.Account.Transaction"
		)
		.bind()
}
