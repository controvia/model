import { cryptly } from "cryptly"
import { isly } from "isly"
import { User } from "../User"

export interface Organization {
	id: cryptly.Identifier4
	permissions: User.Permissions
}
export namespace Organization {
	export const { type, is, flawed } = isly
		.object({
			id: isly.from("cryptly.Identifier4", cryptly.Identifier4.is),
			permissions: User.Permissions.type,
		})
		.bind()
}
