import { Chart } from "../../"
import { charts } from "../charts"

function load(load: (name: string) => Chart | undefined): Chart | undefined {
	const base = load("bas2025")
	return (
		base && {
			...base,
			name: "bas2025-k2",
			label: {
				en: "BAS 2025 K2",
				sv: "BAS 2025 K2",
			},
			description: {
				en: "Chart of accounts according to BAS 2025 for K2 companies.",
				sv: "Kontoplan enligt BAS 2025 för K2-företag.",
			},
			accounts: base.accounts.filter(
				account =>
					![
						1010, 1011, 1012, 1018, 1019, 1081, 1260, 1269, 1370, 1518, 2089, 2092, 2096, 2448, 3940, 7940, 8290, 8291,
						8295, 8320, 8321, 8325, 8470, 8450, 8451, 8455, 8480, 8940,
					].some(a => a == account)
			),
		}
	)
}
charts.set("bas2025-k2", load)
