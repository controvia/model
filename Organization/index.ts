import { cryptly } from "cryptly"
import { isly } from "isly"
import { Creatable as _Creatable } from "./Creatable"
import { Type as _Type } from "./Type"

export interface Organization extends Organization.Creatable {
	id: cryptly.Identifier4
}
export namespace Organization {
	export import Creatable = _Creatable
	export import Type = _Type
	export const { type, is, flawed } = Creatable.type
		.extend<Organization>(
			{
				id: isly.from<cryptly.Identifier4>("cryptly.Identifier4", cryptly.Identifier4.is), // TODO: Update cryptly to isly version 1
			},
			"controvia.Organization"
		)
		.bind()
}
