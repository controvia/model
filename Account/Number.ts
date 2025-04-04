import { isly } from "isly"

export type Number = number
export namespace Number {
	export const { type, is, flawed, parse } = isly.number<Number>("integer").restrict("range", 1000, 8999).bind()
}
