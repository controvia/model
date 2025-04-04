import { isly } from "isly"
import { Account as controviaAccount } from "../../Account"
import { Balances } from "../../Balances"
import { Journal } from "../Journal"
import { Transaction as _Transaction } from "./Transaction"

export interface Account extends controviaAccount, Partial<Balances> {}
export namespace Account {
	export import Transaction = _Transaction
	export const { type, is, flawed } = controviaAccount.type
		.extend<Account>(
			{
				opening: isly.number().optional(),
				closing: isly.number().optional(),
			},
			"controvia.Ledger.Account"
		)
		.bind()
	export function getTransactions(journal: Journal, account: Account): Transaction[] | undefined {
		let balance = account.opening ?? 0
		const result = journal
			.filter(entry => entry.transactions.some(t => t.account == account.number))
			.map(entry => {
				const amount = entry.transactions.reduce((sum, t) => sum + (t.account == account.number ? t.amount : 0), 0)
				return {
					amount,
					balance: (balance += amount),
					entry,
				} // satisfies Transaction
			})
		return balance == account.closing ? result : undefined
	}
}
