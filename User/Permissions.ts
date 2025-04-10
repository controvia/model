import { flagly } from "flagly"
import { isly } from "isly"

export interface Permissions extends flagly.Flags {
	ledger?:
		| {
				journal?: { read?: boolean | undefined; append?: boolean | undefined } | boolean | undefined
				accounts?:
					| { read?: boolean | undefined; entries?: boolean | undefined; change?: boolean | undefined }
					| boolean
					| undefined
				reports?:
					| { read?: boolean | undefined; entries?: boolean | undefined }
					| Record<string, { read?: boolean | undefined; entries?: boolean | undefined } | boolean | undefined>
					| boolean
					| undefined
		  }
		| boolean
		| undefined
	organization?: { read?: boolean | undefined; change?: boolean | undefined } | boolean | undefined
	version?: { admin?: boolean | undefined } | boolean | undefined
}
export namespace Permissions {
	export const { type, is, flawed } = isly
		.object<Permissions>({
			ledger: isly
				.object({
					journal: isly
						.object({ read: isly.boolean().optional(), append: isly.boolean().optional() })
						.or(isly.boolean())
						.optional(),
					accounts: isly
						.object({
							read: isly.boolean().optional(),
							entries: isly.boolean().optional(),
							change: isly.boolean().optional(),
						})
						.or(isly.boolean())
						.optional(),
					reports: isly
						.union(
							isly.boolean(),
							isly.object({ read: isly.boolean().optional(), entries: isly.boolean().optional() }),
							isly.record(
								isly.string(),
								isly
									.object({ read: isly.boolean().optional(), entries: isly.boolean().optional() })
									.or(isly.boolean())
									.optional()
							)
						)
						.optional(),
				})
				.optional(),
			organization: isly
				.object({ read: isly.boolean().optional(), change: isly.boolean().optional() })
				.or(isly.boolean())
				.optional(),
			version: isly.object({ admin: isly.boolean().optional() }).or(isly.boolean()).optional(),
		})
		.bind()
	export function has(permissions: Permissions, required: Permissions): boolean {
		return flagly.has(permissions, required)
	}
}
