import { isoly } from "isoly"
import { isly } from "isly"
import { Label } from "../Label"
import { Translation } from "./Translation"

export type Translations = Partial<Record<isoly.Language, Translation>>
export namespace Translations {
	export const { type, is, flawed } = isly.record<Translations>(isoly.Language.type, Translation.type).bind()
	export function create(load: (language: isoly.Language) => Translation): Translations {
		return new Proxy<Translations>(
			{},
			{
				get: (target, property) => (!isoly.Language.is(property) ? undefined : (target[property] ??= load(property))),
			}
		)
	}
	export function getLabel(translations: Translations, name: string, overrides?: Label): Label {
		return new Proxy<Label>(overrides ?? {}, {
			get: (target, property) =>
				!isoly.Language.is(property) ? undefined : (target[property] ??= translations[property]?.[name]),
			ownKeys: () => Object.keys(translations),
			getOwnPropertyDescriptor: () => ({
				enumerable: true,
				configurable: true,
			}),
		})
	}
}
