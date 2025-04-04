import "./bas2025"
import "./bas2025-k2"
import "./bas2025-basic"
import { Chart } from "../"
import { charts as _charts } from "./charts"

export namespace charts {
	export function load(name: "default"): Chart
	export function load(name: string | "default"): Chart | undefined
	export function load(name: string | "default"): Chart | undefined {
		return _charts.get(name == "default" ? "bas2025" : name)?.(load)
	}
}
