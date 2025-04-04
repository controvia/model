import { isly } from "isly"

export type Translation = Record<string, string>
export namespace Translation {
	export const { type, is, flawed } = isly
		.record<Translation>(isly.string(), isly.string())
		.rename("controvia.Chart.Translation")
		.bind()
}
