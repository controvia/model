import { cryptly } from "cryptly"
import { isly } from "isly"
import { Permissions as _Permissions } from "./Permissions"
import { Role as _Role } from "./Role"
import { Roles as _Roles } from "./Roles"

export interface User {
	name: string
	organizations: { id: cryptly.Identifier4; name: string; roles: string[] }[]
}

export namespace User {
	export import Permissions = _Permissions
	export import Role = _Role
	export import Roles = _Roles
	export const { type, is, flawed } = isly
		.object<User>({
			name: isly.string(),
			organizations: isly
				.object({
					id: isly.from("cryptly.Identifier4", cryptly.Identifier4.is),
					name: isly.string(),
					roles: isly.string().array(),
				})
				.array(),
		})
		.bind()
}
