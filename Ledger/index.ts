import { isoly } from "isoly"
import { isly } from "isly"
import { Period } from "../Period"
import { Account as _Account } from "./Account"
import { Journal as _Journal } from "./Journal"
import { Query as _Query } from "./Query"

export interface Ledger {
	chart: string
	period: Period
	currency: isoly.Currency
	accounts: Ledger.Account[]
	journal: Ledger.Journal
}
export namespace Ledger {
	export import Account = _Account
	export import Journal = _Journal
	export import Query = _Query
	export const { type, is, flawed } = isly
		.object<Ledger>(
			{
				chart: isly.string(),
				period: Period.type,
				currency: isoly.Currency.type,
				accounts: Account.type.array(),
				journal: Journal.type,
			},
			"controvia.Ledger"
		)
		.bind()
}
