import { isoly } from "isoly"
import { isly } from "isly"
import { Account } from "../Account"

export interface Transaction {
	account: Account.Number
	amount: number
	date?: isoly.Date
	registered?: isoly.Date
	description?: string
	quantity?: number
	signature?: string
}
export namespace Transaction {
	export const { type, is, flawed } = isly
		.object<Transaction>({
			account: Account.Number.type,
			amount: isly.number(),
			date: isoly.Date.type.optional(),
			registered: isoly.Date.type.optional(),
			description: isly.string().optional(),
			quantity: isly.number().optional(),
			signature: isly.string().optional(),
		})
		.rename("controvia.Ledger.Transaction")
		.bind()
}
