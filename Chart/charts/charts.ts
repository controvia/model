import { Chart } from "../"

export const charts: Map<string, charts.Loader> = new Map()

export namespace charts {
	export type Loader = (load: (name: string) => Chart | undefined) => Chart | undefined
}
