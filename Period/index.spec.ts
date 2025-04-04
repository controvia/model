import { controvia } from "index"

describe("controvia.Period", () => {
	it.each([
		["2023-01-01--2023-12-31", true],
		["2023-01-01--31-12-2023", false],
		["2023-01-01--", false],
		["2023-01-01--2023-12-31--2024-01-01", false],
		["2023-01-01--2023-01-01", true],
	])("is(%s) == %s", (period, expected) => expect(controvia.Period.is(period)).toBe(expected))
	it.each([
		["2023-01-01--2023-12-31", "2023-01-01--2023-12-31"],
		["2023-01-01--2023-12-31--2024-01-01", undefined],
		["2023-01-01--2023-01-01", "2023-01-01--2023-01-01"],
	])("parse(%s) == %s", (period, expected) => expect(controvia.Period.parse(period)).toBe(expected))
})
