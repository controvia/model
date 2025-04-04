import { isoly } from "isoly"
import { isly } from "isly"
import { Numeric as _Numeric } from "./Numeric"

export type Period = `${isoly.Date}--${isoly.Date}`
export namespace Period {
	export import Numeric = _Numeric
	export const { type, is, flawed } = isly
		.string(value => {
			const splitted = value.split("--")
			return splitted.length == 2 && splitted.every(isoly.Date.is)
		}, "YYYY-MM-DD--YYYY-MM-DD")
		.bind()
	export function parse(value: string): Period | undefined {
		return Numeric.parse(value)?.toString()
	}
}
