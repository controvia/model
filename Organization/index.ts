import { isoly } from "isoly"
import { isly } from "isly"
import { Type as _Type } from "./Type"

export interface Organization {
	jurisdiction?: isoly.CountryCode.Alpha2
	number?: string
	name?: string
	type?: Organization.Type
}
export namespace Organization {
	export import Type = _Type
	export const { type, is, flawed } = isly
		.object<Organization>({
			jurisdiction: isoly.CountryCode.Alpha2.type.optional(),
			number: isly.string().optional(),
			name: isly.string().optional(),
			type: Type.type.optional(),
		})
		.bind()
}
