import { isoly } from "isoly"
import { isly } from "isly"

export type Label = Partial<Record<isoly.Language, string | undefined>>
export namespace Label {
	export const { type, is, flawed } = isly
		.record<Label>(isoly.Language.type, isly.string())
		.rename("controvia.Chart.Label")
		.bind()
	export function merge(label: Label | undefined, defaults: Label | undefined): Label {
		return new Proxy(label ?? {}, {
			get(target: Label, key: string): string | undefined {
				return key in target ? target[key as keyof Label] : defaults?.[key as keyof Label]
			},
		})
	}
}
