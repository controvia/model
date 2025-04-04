import { describe, expect, it } from "vitest"
import { controvia } from "../../../index"

describe("controvia.Ledger.Journal.Entry", () => {
	it.each([
		[
			{
				series: "V",
				number: "1",
				date: "2020-01-01",
				description: "Initial balance",
				transactions: [
					{ account: 1000, amount: 100000 },
					{ account: 3000, amount: -100000 },
				],
			},
			false,
		],
	] as const)("flawed", (value, expected) => expect(controvia.Ledger.Journal.Entry.flawed(value)).toEqual(expected))
})
