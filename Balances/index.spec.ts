import { Balances } from "Balances"

describe("Balances", () => {
	it.each([
		[{ opening: 100, closing: 200 }, true],
		[{ opening: "100", closing: 200 }, false],
		[Balances.zero, true],
		[{}, false],
		[{ opening: 100 }, false],
		[{ closing: 200 }, false],
	] as const)("is(%s) == %s", (value, expected) => expect(Balances.is(value)).toBe(expected))
	it.each([
		[
			[
				{ opening: 100, closing: 200 },
				{ opening: 50, closing: 150 },
			],
			{ opening: 150, closing: 350 },
		],
		[
			[
				{ opening: 0, closing: 0 },
				{ opening: 0, closing: 0 },
			],
			{ opening: 0, closing: 0 },
		],
	])("sum(%j) == %j", (balances, expected) => {
		expect(Balances.sum(balances)).toEqual(expected)
	})
	it.each([
		[
			{ opening: 100, closing: 200 },
			{ opening: 50, closing: 150 },
			{ opening: 150, closing: 350 },
		],
		[
			{ opening: 0, closing: 0 },
			{ opening: 0, closing: 0 },
			{ opening: 0, closing: 0 },
		],
	])("add(%j, %j) == %j", (left, right, expected) => expect(Balances.add(left, right)).toEqual(expected))
	it.each([
		[
			{ opening: 100, closing: 200 },
			{ opening: 50, closing: 150 },
			{ opening: 50, closing: 50 },
		],
		[
			{ opening: 0, closing: 0 },
			{ opening: 0, closing: 0 },
			{ opening: 0, closing: 0 },
		],
	])("subtract(%j, %j) == %j", (left, right, expected) => expect(Balances.subtract(left, right)).toEqual(expected))
})
