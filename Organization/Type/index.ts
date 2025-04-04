import { isly } from "isly"

export type Type = typeof Type.values[number]

export namespace Type {
	export const values = [
		"limited-company", // Aktiebolag (B)
		"sole-trader", // Enskild näringsidkare (E)
		"general-partnership", // Handelsbolag (HB)
		"limited-partnership", // Kommanditbolag (KB)
		"economic-association", // Ekonomisk förening (EK)
		"cooperative-housing-association", // Kooperativ hyresrättsförening (KHF)
		"housing-cooperative", // Bostadsrättsförening (BRF)
		"housing-association", // Bostadsförening (BF)
		"joint-farming-association", // Sambruksförening (SF)
		"non-profit-business-association", // Ideell förening som bedriver näring (I)
		"foundation-business", // Stiftelse som bedriver näring (S)
		"foreign-branch", // Filial till utländskt bolag (FL)
		"banking-limited-company", // Bankaktiebolag (BAB)
		"member-bank", // Medlemsbank (MB)
		"savings-bank", // Sparbank (SB)
		"foreign-bank-branch", // Utländsk banks filial (BFL)
		"insurance-limited-company", // Försäkringsaktiebolag (FAB)
		"mutual-insurance-company", // Ömsesidigt försäkringsbolag (OFB)
		"european-company", // Europabolag (SE)
		"european-cooperative-society", // Europakooperativ (SCE)
		"religious-community", // Trossamfund (TSF)
		"other", // Annan företagsform (X)
	] as const
	export const { type, is, flawed } = isly
		.string<Type>("value", ...values)
		.rename("controvia.Organization.Type")
		.describe("Type of organization.")
		.bind()
}
