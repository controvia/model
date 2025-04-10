import { controvia } from "../index"

describe("controvia.User.Permissions", () => {
	it.each([
		[{}, {}, true],
		[{ version: true }, { version: true }, true],
		[{ version: true }, { version: { admin: true } }, true],
		[{ version: true }, { version: { admin: true } }, true],
		[{ ledger: { journal: true } }, { ledger: { journal: { read: true } } }, true],
		[{ ledger: { journal: { read: true } } }, { ledger: { journal: { append: true } } }, false],
		[{ ledger: { accounts: { read: true } } }, { ledger: { accounts: { entries: true } } }, false],
		[{ ledger: { accounts: { read: true, entries: true } } }, { ledger: { accounts: { entries: true } } }, true],
		[{ ledger: { reports: true } }, { ledger: { reports: { read: true } } }, true],
		[{ ledger: { reports: { read: true } } }, { ledger: { reports: { entries: true } } }, false],
		[{ ledger: { reports: { read: true, entries: true } } }, { ledger: { reports: { entries: true } } }, true],
		[{ organization: true }, { organization: { read: true } }, true],
		[{ organization: { read: true } }, { organization: { change: true } }, false],
		[{ organization: { read: true, change: true } }, { organization: { change: true } }, true],
		[
			{ ledger: { reports: { custom: { read: true } } } },
			{ ledger: { reports: { custom: { entries: true } } } },
			false,
		],
		[
			{ ledger: { reports: { custom: { read: true, entries: true } } } },
			{ ledger: { reports: { custom: { entries: true } } } },
			true,
		],
	] as const)("has(%s, %s) == %s", (permissions, requirement, expected) =>
		expect(controvia.User.Permissions.has(permissions, requirement)).toBe(expected)
	)
	it.each([
		[{}, true],
		[{ version: true }, true],
		[{ version: { admin: true } }, true],
		[{ ledger: { journal: true } }, true],
		[{ ledger: { journal: { read: true } } }, true],
		[{ ledger: { journal: { append: true } } }, true],
		[{ ledger: { accounts: { entries: true } } }, true],
		[{ ledger: { accounts: { read: true, entries: true } } }, true],
		[{ ledger: { reports: { read: true } } }, true],
		[{ ledger: { reports: { entries: true } } }, true],
		[{ ledger: { reports: { entries: true } } }, true],
		[{ organization: true }, true],
		[{ organization: { change: true } }, true],
		[{ organization: { read: true, change: true } }, true],
		[{ ledger: { reports: { custom: { entries: true } } } }, true],
		[{ ledger: { reports: { custom: { read: true, entries: true } } } }, true],
	] as const)("is(%s) == %s", (value, expected) => expect(controvia.User.Permissions.is(value)).toBe(expected))
})
