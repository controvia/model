import { isly } from "isly"

export interface Balances {
	opening: number
	closing: number
}
export namespace Balances {
	export const { type, is, flawed } = isly
		.object<Balances>(
			{
				opening: isly.number(),
				closing: isly.number(),
			},
			"controvia.Balances"
		)
		.bind()
	export const zero: Readonly<Balances> = {
		opening: 0,
		closing: 0,
	}
	export function sum(balances: Partial<Balances>[]): Balances {
		return balances.reduce<Balances>(add, zero)
	}
	export function add(left: Partial<Balances>, right: Partial<Balances>): Balances {
		return {
			opening: (left.opening ?? 0) + (right.opening ?? 0),
			closing: (left.closing ?? 0) + (right.closing ?? 0),
		}
	}
	export function subtract(left: Partial<Balances>, right: Partial<Balances>): Balances {
		return {
			opening: (left.opening ?? 0) - (right.opening ?? 0),
			closing: (left.closing ?? 0) - (right.closing ?? 0),
		}
	}
}
