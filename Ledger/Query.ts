import { isly } from "isly"
import type { Ledger } from "./"

export type Query = {
	[property in keyof Pick<Ledger, "accounts" | "journal">]?: false
}
export namespace Query {
	export const { type, is, flawed } = isly
		.object<Query>(
			{
				accounts: isly.boolean(false).optional(),
				journal: isly.boolean(false).optional(),
			},
			"controvia.Ledger.Query"
		)
		.bind()
}
