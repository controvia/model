import { controvia } from "../index"

describe("controvia.Me", () => {
	it.each([[{ email: "test@acme.tld", organizations: [] }, true]])("is(%s) == %s", (value, expected) =>
		expect(controvia.Me.is(value)).toBe(expected)
	)
})
