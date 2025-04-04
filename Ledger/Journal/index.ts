import { Entry as _Entry } from "./Entry"

export type Journal = readonly Journal.Entry[]
export namespace Journal {
	export import Entry = _Entry
	export const { type, is, flawed } = Entry.type.array().rename("controvia.Ledger.Journal").bind()
}
