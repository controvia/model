import { isly } from "isly"
import { Permissions } from "./Permissions"

export interface Role {
	name: string
	label: string
	description?: string
	permissions: Permissions
}
export namespace Role {
	export const { type, is, flawed } = isly
		.object<Role>({
			name: isly.string(),
			label: isly.string(),
			description: isly.string().optional(),
			permissions: Permissions.type,
		})
		.bind()
}
