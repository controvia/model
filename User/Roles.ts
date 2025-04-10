import { flagly } from "flagly"
import { Permissions } from "./Permissions"
import { Role } from "./Role"

export type Roles = Role[]

export namespace Roles {
	export const { type, is, flawed } = Role.type.array().bind()
	export function resolve(definitions: Roles, roles: string[]): Roles {
		return roles.map(role => definitions.find(definition => definition.name == role)).filter(role => role != undefined)
	}
	export function merge(roles: Roles): Permissions {
		return flagly.reduce(...roles.map(role => role.permissions))
	}
}
