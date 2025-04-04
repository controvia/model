import { describe, expect, it } from "vitest"
import { controvia } from "../../index"

describe("controvia.Ledger.Account", () => {
	it.each([
		[
			{
				label: { en: "Bank" },
				number: 1000,
				type: "asset",
				opening: 100000,
				closing: 0,
			},
			false,
		],
	] as const)("flawed", (value, expected) => expect(controvia.Ledger.Account.flawed(value)).toEqual(expected))
})
