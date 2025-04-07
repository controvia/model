import { isoly } from "isoly"
import { isly } from "isly"
import { Type } from "./Type"

export interface Creatable {
	jurisdiction?: isoly.CountryCode.Alpha2
	number?: string
	name?: string
	type?: Type
}
export namespace Creatable {
	export const { type, is, flawed } = isly
		.object<Creatable>({
			jurisdiction: isoly.CountryCode.Alpha2.type.optional(),
			number: isly.string().optional(),
			name: isly.string().optional(),
			type: Type.type.optional(),
		})
		.bind()
}
