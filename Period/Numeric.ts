import { isoly } from "isoly"
import type { Period } from "."

export class Numeric {
	constructor(readonly start: isoly.Date.Numeric, readonly end: isoly.Date.Numeric) {}
	static parse(value: Period): Numeric
	static parse(value: string): Numeric | undefined
	static parse(value: string): Numeric | undefined {
		const splitted = value.split("--").map(isoly.Date.Numeric.parse)
		return splitted.length == 2 && splitted[0] && splitted[1] ? new Numeric(splitted[0], splitted[1]) : undefined
	}
	format(): Period {
		return `${isoly.Date.Numeric.format(this.start)}--${isoly.Date.Numeric.format(this.end)}`
	}
	toString(): Period {
		return this.format()
	}
	toJSON(): Period {
		return this.format()
	}
}
export namespace Numeric {}
