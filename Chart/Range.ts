import { isly } from "isly"
import { Account } from "../Account"

export type Range = [Account.Number, Account.Number]
export namespace Range {
	export const { type, is, flawed } = isly.tuple(Account.Number.type, Account.Number.type).bind()
	export function contains(range: Range, number: Account.Number): boolean {
		return range[0] <= number && number <= range[1]
	}
	export function* enumerate(range: Range): Generator<Account.Number> {
		for (let account = range[0]; account <= range[1]; account++)
			yield account
	}
}
