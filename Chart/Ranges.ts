import { Account } from "../Account"
import { Range } from "./Range"

export type Ranges = (Range | Account.Number)[]
export namespace Ranges {
	export const { type, is, flawed } = Range.type.or(Account.Number.type).array().bind()
	export function contains(ranges: Ranges, number: Account.Number): boolean {
		return ranges.some(range => (Range.is(range) ? Range.contains(range, number) : range == number))
	}
	export function* enumerate(ranges: Ranges): Generator<Account.Number> {
		for (const range of ranges)
			if (Range.is(range))
				yield* Range.enumerate(range)
			else
				yield range
	}
}
