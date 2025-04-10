import { cryptly } from "cryptly"
import { isly } from "isly"
import { User } from "../User"

export interface Me {
	email: string
	organizations: { id: cryptly.Identifier4; name: string; permissions: User.Permissions }[]
}
export namespace Me {
	export const { type, is, flawed } = isly
		.object<Me>({
			email: isly.string(),
			organizations: isly
				.object({
					id: isly.from("cryptly.Identifier4", cryptly.Identifier4.is),
					name: isly.string(),
					permissions: User.Permissions.type,
				})
				.array(),
		})
		.bind()
}
