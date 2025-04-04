import { Chart } from "../../../../"
import { accounts } from "./accounts"
import { reports } from "./reports"
import { types } from "./types"

export const sv: Chart.Translation = {
	bas2025: "BAS 2025",
	"bas2005.description": "Kontoplan enligt BAS-kontogruppen i Stockholm AB (bas.se) år 2025.",
	...accounts,
	...reports,
	...types,
}
