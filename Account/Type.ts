import { isly } from "isly"

export type Type = typeof Type.values[number]

export namespace Type {
	export const values = ["asset", "liability", "revenue", "expense"]
	export const { type, is, flawed } = isly.string("value", ...values).bind()
}
