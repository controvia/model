import { Chart } from "../../"
import { charts } from "../charts"
import { labels } from "./labels"

function load(): Chart | undefined {
	return {
		name: "bas2025",
		labels,
		accounts: [
			1010, 1011, 1012, 1018, 1019, 1020, 1028, 1029, 1030, 1038, 1039, 1040, 1048, 1049, 1050, 1058, 1059, 1060, 1068,
			1069, 1070, 1078, 1079, 1080, 1081, 1088, 1110, 1111, 1112, 1118, 1119, 1120, 1129, 1130, 1140, 1150, 1158, 1159,
			1180, 1181, 1188, 1210, 1211, 1213, 1218, 1219, 1220, 1221, 1222, 1223, 1225, 1228, 1229, 1230, 1231, 1232, 1238,
			1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1257, 1258, 1259, 1260, 1269, 1280,
			1281, 1288, 1290, 1291, 1292, 1298, 1299, 1310, 1311, 1312, 1313, 1314, 1316, 1317, 1318, 1320, 1321, 1322, 1323,
			1328, 1330, 1331, 1332, 1333, 1334, 1336, 1337, 1338, 1340, 1341, 1342, 1343, 1344, 1346, 1347, 1348, 1350, 1351,
			1352, 1353, 1354, 1356, 1357, 1358, 1360, 1369, 1370, 1380, 1381, 1382, 1383, 1384, 1385, 1387, 1388, 1389, 1410,
			1419, 1420, 1429, 1440, 1449, 1450, 1459, 1460, 1465, 1466, 1467, 1469, 1470, 1471, 1478, 1479, 1480, 1481, 1489,
			1490, 1491, 1492, 1493, 1510, 1511, 1512, 1513, 1516, 1518, 1519, 1520, 1525, 1529, 1530, 1531, 1532, 1536, 1539,
			1550, 1560, 1561, 1562, 1563, 1568, 1569, 1570, 1571, 1572, 1573, 1580, 1610, 1611, 1612, 1613, 1614, 1619, 1620,
			1630, 1640, 1650, 1660, 1661, 1662, 1663, 1670, 1671, 1672, 1673, 1680, 1681, 1682, 1683, 1684, 1685, 1687, 1688,
			1689, 1690, 1710, 1720, 1730, 1740, 1750, 1760, 1770, 1780, 1790, 1810, 1820, 1830, 1860, 1880, 1886, 1889, 1890,
			1910, 1911, 1912, 1913, 1920, 1930, 1940, 1950, 1960, 1970, 1972, 1973, 1974, 1979, 1980, 1990, 2010, 2011, 2013,
			2017, 2018, 2019, 2020, 2021, 2023, 2027, 2028, 2029, 2030, 2031, 2033, 2037, 2038, 2039, 2040, 2041, 2043, 2047,
			2048, 2049, 2050, 2060, 2061, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2080, 2081, 2082, 2083, 2084,
			2085, 2086, 2087, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2110, 2120, 2121,
			2122, 2123, 2124, 2125, 2126, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2138, 2139, 2150, 2151, 2152,
			2153, 2160, 2161, 2162, 2164, 2190, 2196, 2199, 2210, 2220, 2230, 2240, 2250, 2252, 2253, 2290, 2310, 2320, 2321,
			2322, 2323, 2324, 2330, 2331, 2332, 2340, 2350, 2351, 2355, 2359, 2360, 2361, 2362, 2363, 2370, 2371, 2372, 2373,
			2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2399, 2410, 2411, 2412, 2417, 2419, 2420, 2421, 2429, 2430, 2431,
			2438, 2439, 2440, 2441, 2443, 2445, 2448, 2450, 2460, 2461, 2462, 2463, 2470, 2471, 2472, 2473, 2480, 2490, 2491,
			2492, 2499, 2510, 2512, 2513, 2514, 2515, 2517, 2518, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2618, 2620, 2621,
			2622, 2623, 2624, 2625, 2626, 2628, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2638, 2640, 2641, 2642, 2645, 2646,
			2647, 2648, 2649, 2650, 2660, 2670, 2710, 2730, 2731, 2732, 2740, 2750, 2760, 2761, 2762, 2790, 2791, 2792, 2793,
			2794, 2795, 2799, 2810, 2811, 2812, 2820, 2821, 2822, 2823, 2829, 2830, 2840, 2841, 2849, 2850, 2852, 2860, 2861,
			2862, 2863, 2870, 2871, 2872, 2873, 2880, 2890, 2891, 2892, 2893, 2895, 2897, 2898, 2899, 2910, 2911, 2912, 2919,
			2920, 2930, 2931, 2940, 2941, 2942, 2943, 2944, 2950, 2951, 2959, 2960, 2970, 2971, 2972, 2979, 2980, 2990, 2991,
			2992, 2993, 2995, 2998, 2999, 3000, 3001, 3002, 3003, 3004, 3100, 3105, 3106, 3108, 3200, 3211, 3212, 3231, 3300,
			3305, 3308, 3400, 3401, 3402, 3403, 3404, 3500, 3510, 3511, 3518, 3520, 3521, 3522, 3530, 3540, 3541, 3542, 3550,
			3560, 3561, 3562, 3563, 3570, 3590, 3600, 3610, 3611, 3612, 3613, 3619, 3620, 3630, 3670, 3671, 3672, 3679, 3680,
			3690, 3700, 3710, 3730, 3731, 3732, 3740, 3750, 3751, 3752, 3790, 3800, 3840, 3850, 3870, 3900, 3910, 3911, 3912,
			3913, 3914, 3920, 3921, 3922, 3925, 3940, 3950, 3960, 3970, 3971, 3972, 3973, 3980, 3981, 3985, 3987, 3988, 3989,
			3990, 3991, 3992, 3993, 3994, 3995, 3996, 3997, 3998, 3999, 4000, 4200, 4211, 4212, 4400, 4415, 4416, 4417, 4425,
			4426, 4427, 4500, 4515, 4516, 4517, 4518, 4531, 4532, 4533, 4535, 4536, 4537, 4538, 4545, 4546, 4547, 4600, 4700,
			4730, 4731, 4732, 4733, 4790, 4900, 4960, 4970, 4974, 4975, 4977, 4980, 4981, 4987, 4988, 5000, 5010, 5011, 5012,
			5013, 5020, 5030, 5040, 5050, 5060, 5061, 5062, 5063, 5064, 5065, 5070, 5090, 5098, 5099, 5100, 5110, 5120, 5130,
			5131, 5132, 5140, 5160, 5161, 5162, 5163, 5164, 5165, 5170, 5190, 5191, 5192, 5193, 5198, 5199, 5200, 5210, 5211,
			5212, 5220, 5221, 5222, 5250, 5251, 5252, 5290, 5300, 5310, 5320, 5330, 5340, 5350, 5360, 5370, 5380, 5390, 5400,
			5410, 5411, 5412, 5420, 5430, 5440, 5460, 5480, 5490, 5491, 5492, 5493, 5500, 5510, 5520, 5530, 5550, 5580, 5590,
			5600, 5610, 5611, 5612, 5613, 5615, 5616, 5619, 5620, 5630, 5640, 5650, 5660, 5670, 5690, 5700, 5710, 5720, 5730,
			5790, 5800, 5810, 5820, 5830, 5831, 5832, 5890, 5900, 5910, 5920, 5930, 5940, 5950, 5960, 5970, 5980, 5990, 6000,
			6010, 6020, 6030, 6040, 6050, 6055, 6060, 6061, 6062, 6063, 6064, 6069, 6070, 6071, 6072, 6080, 6090, 6100, 6110,
			6150, 6200, 6210, 6211, 6212, 6213, 6214, 6215, 6230, 6250, 6300, 6310, 6320, 6330, 6340, 6341, 6342, 6350, 6351,
			6352, 6360, 6361, 6362, 6370, 6380, 6390, 6400, 6410, 6420, 6421, 6422, 6423, 6424, 6430, 6440, 6450, 6490, 6500,
			6510, 6520, 6530, 6540, 6550, 6551, 6552, 6553, 6554, 6555, 6556, 6559, 6560, 6570, 6580, 6590, 6800, 6810, 6820,
			6830, 6840, 6850, 6860, 6870, 6880, 6890, 6900, 6910, 6920, 6930, 6940, 6950, 6970, 6980, 6981, 6982, 6990, 6991,
			6992, 6993, 6996, 6997, 6998, 6999, 7000, 7010, 7011, 7012, 7013, 7017, 7018, 7019, 7030, 7031, 7032, 7037, 7038,
			7039, 7080, 7081, 7082, 7083, 7089, 7090, 7200, 7210, 7211, 7212, 7213, 7217, 7218, 7219, 7220, 7221, 7222, 7227,
			7228, 7229, 7230, 7231, 7232, 7237, 7238, 7239, 7240, 7280, 7281, 7282, 7283, 7284, 7285, 7286, 7288, 7289, 7290,
			7291, 7292, 7300, 7310, 7311, 7312, 7313, 7314, 7315, 7316, 7317, 7318, 7319, 7320, 7321, 7322, 7323, 7324, 7330,
			7331, 7332, 7333, 7350, 7370, 7380, 7381, 7382, 7383, 7384, 7385, 7386, 7387, 7388, 7389, 7390, 7391, 7392, 7400,
			7410, 7411, 7412, 7420, 7430, 7440, 7441, 7448, 7460, 7461, 7462, 7463, 7470, 7490, 7500, 7510, 7511, 7512, 7515,
			7516, 7518, 7519, 7530, 7531, 7532, 7533, 7550, 7551, 7552, 7553, 7554, 7570, 7571, 7572, 7580, 7581, 7582, 7583,
			7589, 7590, 7600, 7610, 7620, 7621, 7622, 7623, 7630, 7631, 7632, 7650, 7670, 7671, 7678, 7690, 7691, 7692, 7693,
			7699, 7710, 7720, 7730, 7740, 7760, 7770, 7780, 7790, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7819, 7820,
			7821, 7824, 7829, 7830, 7831, 7832, 7833, 7834, 7835, 7836, 7839, 7840, 7940, 7960, 7970, 7971, 7972, 7973, 7990,
			8010, 8012, 8016, 8020, 8022, 8030, 8070, 8072, 8076, 8077, 8080, 8082, 8086, 8087, 8110, 8111, 8112, 8113, 8116,
			8117, 8118, 8120, 8121, 8122, 8123, 8130, 8131, 8132, 8133, 8170, 8171, 8172, 8173, 8174, 8176, 8177, 8180, 8181,
			8182, 8183, 8184, 8186, 8187, 8210, 8212, 8216, 8220, 8221, 8222, 8223, 8230, 8231, 8236, 8240, 8250, 8251, 8252,
			8254, 8255, 8260, 8261, 8262, 8263, 8270, 8271, 8272, 8273, 8280, 8281, 8282, 8283, 8290, 8291, 8295, 8310, 8311,
			8312, 8313, 8314, 8317, 8319, 8320, 8321, 8325, 8330, 8331, 8336, 8340, 8350, 8360, 8361, 8362, 8363, 8370, 8380,
			8390, 8400, 8410, 8411, 8412, 8413, 8415, 8417, 8418, 8419, 8420, 8421, 8422, 8423, 8424, 8429, 8430, 8431, 8436,
			8440, 8450, 8451, 8455, 8460, 8461, 8462, 8463, 8480, 8490, 8491, 8810, 8811, 8819, 8820, 8830, 8840, 8850, 8851,
			8852, 8853, 8860, 8861, 8862, 8864, 8865, 8866, 8869, 8890, 8892, 8896, 8899, 8910, 8920, 8930, 8940, 8980, 8990,
			8999,
		],
		types: {
			asset: [[1000, 1999]],
			liability: [[2000, 2999]],
			revenue: [[3000, 3999]],
			expense: [[4000, 8999]],
		},
		reports: [
			{
				name: "balance",
				headers: [
					{
						name: "assets",
						headers: [
							{
								name: "fixed",
								headers: [
									{
										name: "intangible",
										accounts: [[1000, 1099]],
									},
									{
										name: "tangible",
										accounts: [
											[1100, 1199],
											[1200, 1299],
										],
									},
									{
										name: "financial",
										accounts: [[1300, 1399]],
									},
								],
							},
							{
								name: "current",
								headers: [
									{
										name: "inventories",
										accounts: [[1400, 1499]],
									},
									{
										name: "receivables",
										accounts: [
											[1500, 1599],
											[1600, 1699],
										],
									},
									{
										name: "prepaid",
										accounts: [[1700, 1799]],
									},
									{
										name: "financial",
										accounts: [
											[1800, 1899],
											[1900, 1999],
										],
									},
								],
							},
						],
					},
					{
						name: "equity-liabilities",
						headers: [
							{
								name: "equity",
								headers: [
									{
										name: "share",
										accounts: [[2000, 2099]],
									},
								],
							},
							{
								name: "liabilities",
								headers: [
									{
										name: "reserves",
										accounts: [[2100, 2199]],
									},
									{
										name: "provisions",
										accounts: [[2200, 2299]],
									},
									{
										name: "long",
										accounts: [[2300, 2399]],
									},
									{
										name: "short",
										accounts: [[2400, 2499]],
									},
									{
										name: "tax",
										accounts: [[2500, 2699]],
									},
									{
										name: "employer",
										accounts: [[2700, 2799]],
									},
									{
										name: "other",
										accounts: [[2800, 2999]],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "result",
				headers: [
					{
						name: "operating",
						headers: [
							{
								name: "income",
								headers: [
									{
										name: "net",
										accounts: [[3000, 3599]],
									},
									{
										name: "other",
										accounts: [[3600, 3999]],
									},
								],
							},
							{
								name: "expenses",
								headers: [
									{
										name: "cogs",
										accounts: [[4000, 4999]],
									},
									{
										name: "premises",
										accounts: [[5000, 5399]],
									},
									{
										name: "consumables",
										accounts: [[5400, 5699]],
									},
									{
										name: "selling",
										accounts: [[5800, 6099]],
									},
									{
										name: "administration",
										accounts: [[6100, 6799]],
									},
									{
										name: "personnel",
										accounts: [[6800, 7699]],
									},
									{
										name: "depreciation",
										accounts: [[7700, 7899]],
									},
									{
										name: "other",
										accounts: [[7900, 7999]],
									},
								],
							},
						],
					},
					{
						name: "financial",
						headers: [
							{
								name: "income",
								headers: [
									{
										name: "shares",
										accounts: [[8000, 8099]],
									},
									{
										name: "associated",
										accounts: [[8100, 8199]],
									},
									{
										name: "interest",
										accounts: [[8200, 8299]],
									},
									{
										name: "other",
										accounts: [[8300, 8399]],
									},
								],
							},
							{
								name: "expenses",
								headers: [
									{
										name: "interest",
										accounts: [[8400, 8499]],
									},
									{
										name: "other",
										accounts: [[8500, 8699]],
									},
								],
							},
						],
					},
					{
						name: "adjustments",
						headers: [
							{
								name: "extraordinary",
								headers: [
									{
										name: "income",
										accounts: [[8700, 8749]],
									},
									{
										name: "expenses",
										accounts: [[8750, 8799]],
									},
								],
							},
							{
								name: "appropriations",
								headers: [
									{
										name: "tax",
										accounts: [[8800, 8819]],
									},
									{
										name: "group",
										accounts: [[8820, 8849]],
									},
									{
										name: "reserves",
										accounts: [[8850, 8869]],
									},
									{
										name: "other",
										accounts: [[8870, 8899]],
									},
								],
							},
							{
								name: "final",
								headers: [
									{
										name: "taxes",
										accounts: [[8900, 8989]],
									},
									{
										name: "result",
										accounts: [[8990, 8999]],
									},
								],
							},
						],
					},
				],
			},
			{
				name: "vat",
				headers: [
					{
						name: "A",
						headers: [
							{
								name: "05",
								accounts: [
									3000, 3001, 3002, 3003, 3011, 3012, 3013, 3106, 3730, 3731, 3732, 3920, 3921, 3922, 3925, 3950,
								],
							},
							{
								name: "06",
								accounts: [3401, 3402, 3403],
							},
							{
								name: "07",
								accounts: [3200, 3211],
							},
							{
								name: "08",
								accounts: [3913, 3914],
							},
						],
					},
					{
						name: "B",
						headers: [
							{
								name: "10",
								accounts: [2610, 2611, 2612, 2613, 2616],
							},
							{
								name: "11",
								accounts: [2620, 2621, 2622, 2623, 2626],
							},
							{
								name: "12",
								accounts: [2630, 2631, 2632, 2633, 2636],
							},
						],
					},
					{
						name: "C",
						headers: [
							{
								name: "20",
								accounts: [4515, 4516, 4517],
							},
							{
								name: "21",
								accounts: [4535, 4536, 4537],
							},
							{
								name: "22",
								accounts: [4531, 4532, 4533],
							},
							{
								name: "23",
								accounts: [4415, 4416, 4417],
							},
							{
								name: "24",
								accounts: [4425, 4426, 4427],
							},
						],
					},
					{
						name: "D",
						headers: [
							{
								name: "30",
								accounts: [2614, 2617],
							},
							{
								name: "31",
								accounts: [2624, 2627],
							},
							{
								name: "32",
								accounts: [2634, 2637],
							},
						],
					},
					{
						name: "E",
						headers: [
							{
								name: "35",
								accounts: [3108],
							},
							{
								name: "36",
								accounts: [3105],
							},
							{
								name: "37",
								accounts: [4512],
							},
							{
								name: "38",
								accounts: [3107],
							},
							{
								name: "39",
								accounts: [3308],
							},
							{
								name: "40",
								accounts: [3305],
							},
							{
								name: "41",
								accounts: [3231],
							},
							{
								name: "42",
								accounts: [
									3004, 3014, 3089, 3404, 3910, 3911, 3912, 3980, 3981, 3985, 3987, 3988, 3989, 3990, 3991, 3992, 3993,
									3994, 3995, 3996, 3997, 3998, 3999,
								],
							},
						],
					},
					{
						name: "F",
						headers: [
							{
								name: "48",
								accounts: [2640, 2641, 2642, 2645, 2646, 2647, 2649],
							},
						],
					},
					{
						name: "H",
						headers: [
							{
								name: "50",
								accounts: [4545, 4546, 4547],
							},
						],
					},
					{
						name: "I",
						headers: [
							{
								name: "60",
								accounts: [2615],
							},
							{
								name: "61",
								accounts: [2625],
							},
							{
								name: "62",
								accounts: [2635],
							},
						],
					},
				],
			},
		],
	}
}
charts.set("bas2025", load)
