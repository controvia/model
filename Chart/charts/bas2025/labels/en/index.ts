import { Chart } from "../../../../"
import { accounts } from "./accounts"
import { reports } from "./reports"
import { types } from "./types"

export const en: Chart.Translation = {
	bas2025: "BAS 2025",
	"bas2005.description": "Chart of accounts according to the BAS group in Stockholm AB (bas.se) year 2025.",
	...accounts,
	...reports,
	...types,
}
