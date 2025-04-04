import { isly } from "isly"
import { Label } from "../Label"

export interface Header {
	name: string
	label: Label
}
export namespace Header {
	export const { type, is, flawed } = isly
		.object<Header>({
			name: isly.string(),
			label: Label.type,
		})
		.bind()
}
