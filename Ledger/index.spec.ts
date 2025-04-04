import { describe, expect, it } from "vitest"
import { controvia } from "../index"

describe("controvia.Ledger", () => {
	it.each([
		[
			{
				chart: "bas2025k1",
				period: "2020-01-01--2020-12-31",
				currency: "SEK",
				accounts: [
					{
						label: { en: "Bank" },
						number: 1000,
						type: "asset",
						opening: 100000,
						closing: 0,
					},
					{
						label: { en: "Equity" },
						number: 3000,
						type: "liability",
						opening: 0,
						closing: 100000,
					},
				],
				journal: [
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
					{
						series: "V",
						number: "2",
						date: "2020-01-02",
						description: "First sale",
						transactions: [
							{ account: 2000, amount: 1000 },
							{ account: 1000, amount: -1000 },
						],
					},
				],
			},
			false,
		],
	] as const)("flawed", (value, expected) => expect(controvia.Ledger.flawed(value)).toEqual(expected))
})
