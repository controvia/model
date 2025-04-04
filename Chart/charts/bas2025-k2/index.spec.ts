import { describe, expect, it } from "vitest"
import { controvia } from "../../../index"

describe("controvia.Charts.charts.bas2025-k2", () => {
	it("getAccounts", () => {
		const chart = controvia.Chart.load("bas2025-k2")
		const accounts = chart && controvia.Chart.getAccounts(chart)
		expect(accounts).toMatchSnapshot()
	})
})
