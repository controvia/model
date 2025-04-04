import { describe, expect, it } from "vitest"
import { controvia } from "../../../index"

describe("controvia.Charts.charts.bas2025-basic", () => {
	it("getAccounts", () => {
		const chart = controvia.Chart.load("bas2025-basic")
		const accounts = chart && controvia.Chart.getAccounts(chart)
		expect(accounts).toMatchSnapshot()
	})
})
