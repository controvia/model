import { isly } from "isly"
import { Account } from "../Account"
import { Chart } from "."
import { Ranges } from "./Ranges"

export type Types = Record<Account.Type, Chart.Ranges>
export namespace Types {
	export const { type, is, flawed } = isly.record<Types>(Account.Type.type, Ranges.type).bind()
	export function get(types: Types, account: Account.Number): Account.Type | undefined {
		return Object.entries(types).find(([_, range]) => Ranges.contains(range, account))?.[0]
	}
}
