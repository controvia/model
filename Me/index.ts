import { isly } from "isly"
import { Organization as _Organization } from "./Organization"

export interface Me {
	email: string
	organizations: Me.Organization[]
}
export namespace Me {
	export import Organization = _Organization
	export const { type, is, flawed } = isly
		.object<Me>({
			email: isly.string(),
			organizations: Organization.type.array(),
		})
		.bind()
}
