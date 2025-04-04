import { isly } from "isly"

export type Level = typeof Level.values[number]
export namespace Level {
	export const values = [1, 2, 3, 4] as const
	export const { type, is, flawed } = isly
		.number<Level>("value", ...values)
		.rename("Report.Settings.Level")
		.bind()
	export function next(level: Level): Level {
		return level < 4 ? ((level + 1) as Level) : level
	}
}
