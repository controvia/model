import { isly } from "isly"
import { Balances } from "../Balances"
import { Label } from "../Label"
import { Ledger } from "../Ledger"
import { Level } from "./Level"

export interface Header extends Balances {
	name: string
	label: Label
	level: Level
	headers?: Header[]
	accounts?: Ledger.Account[]
}
export namespace Header {
	export const { type, is, flawed } = Balances.type
		.extend<Header>({
			name: isly.string(),
			label: Label.type,
			level: Level.type,
			headers: isly
				.lazy<Header>((): isly.Object<Header> => type, "controvia.Report.Header")
				.array()
				.optional(),
			accounts: Ledger.Account.type.array().optional(),
		})
		.rename("controvia.Report.Header")
		.bind()
}
