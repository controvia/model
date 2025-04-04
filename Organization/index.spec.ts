import { describe, expect, it } from "vitest"
import { controvia } from "../index"

describe("controvia.Organization", () => {
	it.each([
		[{}, true],
		[{ jurisdiction: "SE", number: "554422-1111", name: "ACME AB", type: "limited-company" }, true],
	] as const)("is(%s) == %s", (value, expected) => {
		expect(controvia.Organization.is(value)).toBe(expected)
	})
	it.each([
		[{}, false],
		[{ jurisdiction: "SE", number: "554422-1111", name: "ACME AB", type: "limited-company" }, false],
	] as const)("is(%s) == %s", (value, expected) => {
		expect(controvia.Organization.flawed(value)).toBe(expected)
	})
})
