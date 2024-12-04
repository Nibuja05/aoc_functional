// export function getTestInput() {
// 	return `
// MXMASM
// XMMAMM
// MAMAMM
// MSMMSM
// `.trim();
// }

import { get } from "http";

export function getTestInput() {
	return `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`.trim();
}

export function getInput() {
	return `
MMMMASXMMMMXXMASMMXSAMMMSAMXSXMMXMXMXAMAMXSXXXMXAXAMXMMXAASAMXMSMMMSXSAMXMASAXXAMXAMXAXSXXMASXMMXMASXMAXXMASMMMMXMXSMSSSXSASASMSAMXXSMSMSSXS
MAAXMXMAAAMSMSXSXSMSAXSXSXSASAXAASAMXXSMXXMASMMSMSXSAMSMSSSMSMMAAMASMMAAMAMXMASXMSAMXSMSAAMASMXSASAMAMAMXSAMAAXMASAMASAMXSASASASXMAMSAAAXAAX
MSSSMMSSMMSAASAMAXAMAMSAMAMASAMSMSMSMMAAMSAMXAXAAAAXXXAAXAXXAXSSSMXSASXMSXXASXXAXXAXXMAMXXMASAXSASXSAMAMAMXSSMMSASAMXMMMMMAMAMAMMXSAMMMSMMSM
XMAMAAXXMMSMSMAMAMSMMMMAMXMXMAMMASASASAMMXAAMMAMSMSMMSMXMMMMMMXAMXXSAMXAAMSMXMMMMSMMSMAMXMMMMAMMXMASXSAMXMAAAXAMMMAMMXXAAMAMAMSMSAMXSXXMASXM
MMAMSXSAMAMXXXSMSMMAXSXSMASMXAMMAMAMMSASXXMMSSMXAAMXAAXMSXMAXXMASMXMAMMMMAAMAAAAXXAAMMAMSXXMMASMASMMXSXSAMXXSMSSSSMMAXSXSSMSMSAAMXSAXMAMSAMS
XSXMAXSAMASXMAXAXASMMSAAMAMXSMSMSMMMAXMMMXAAAXXMMAMMSMSASAMSAXXMMMMSAMAAXSXXMMXSMMMMSMSASAMXSASXMXAMAMASXMSXMAMXAAXSSMMAAXAMXSMSMMMMSMXMAMAX
MMAMMXMXSMSAMMMMMMMAAMSMMSSMXMAMXAAMXXXMAXMMXMXAXXXXAAXMXAMMMMXMXXASASMSXMMMSMMAMXSAMAMMXMAXMASMMSSMMMASASMSMAMMSMMMAAMMMSXMMXXAAAAMXAAMMXMS
ASXMXXMASXMAAAAAAXXMXMMXMAAAMSAMXMMMSAMXSMMASMMSSSMSMSMXSSMSASMAMXXSAMAXMASAAASMMAMAMXMMAASAMXMMMAAAXMAMMXAASAXXAAASMMMXAMASXSSMSMSSMXASAAMA
MXMXXAMXMASXMSSSSSMXAAXAMMMSMSASXAAAMSMAMMMAAMAMMAAAAAXXXAAXASAAMXAXAMAMXAMMSMMAMXSAMMMSSSMXXSXXMSSMMMSSMMSMSMSSXSMSMMMMMSAMAAXXAAXAXXAMXSSS
SMASMXMXMXMSAMXAAMMSMXSAXXXMASAMMSMSAMXAMXMXXMAMMMMMSSSMMMXMXMXAXXMSMMXSMXSXMXSMMMAMXMMAMAXMAMSMXMAAXMMAMAMMXMAXXMAXXAAAASAMXMMSMXSAMMXMXMAM
AASAMASXMAAXXSMXMAAMMMXAXSXMAMAMAXAXMASXSASXMSMSAAXMXMAASAASMSSSMAMAXMXXXMMXMMMAAMASMAMASMXXAMAMAXMMMMXAMAMXSMAXXMAMSSSSXSXMXSMXSAMXMMSMSMAM
XSMASXMASMXMMXMASMASXSXSMSAMXSMMSMMMXMMASMSAAAAMMMMMAMSMMASMAAAAXAXMXMAMXXSAMXXSASMSAXSAXXSSMSSSMSMAAMXMMSSMMMSSXMXMXAAMAMXMXMMASMSMMASMMMAX
XMAMXASXMSMAAASAAMAAMMAMMXMMAXMAAASXSAMXMAMMMMSMMXMMAMASAXXMMMMMSSMSMSAAMASMSAMXASMSXXMMSMAAAAAXAAMSMSAAXAAASAASAMXMMMMMMXAMAAMAMXXAMAMXXSAS
XMAMXMSXAAMMSXMAXMMSSMXMAAASMSMMSMMAMXSXMMSSMAXAMAMSMSAXXSXXXSAMXMAAXSAMSAMXAASMXMASAMAAAXMMMXSSSXXMASMSMSSMMMSMXMAXAMXAASMSSSMSSSMMMSSMAMSM
XSASXAXMSMSAXMSSMXAMAMMMMXXAASMMMAMSMAMAXXAAMASAMMMAMMASXMXMAAAMAMMMMMAXMASASMMMMMMMASXSXMXAXMMXXXAMXMAXXXAMSMMMAMSMSAMXXXAAAAAMAXASAMXMAXAM
MSASMMMMMAMAXXAAAXAMAMAMASMMMMAASAMXMASAMMSSMXSMMSMMSMAMAAMMSMSMAXXMMMAMSAMXMAXAAMXMAMMMASXSMMMASMMMAMXMXXMMAAASXSMAMASMXMMMSMMMAMMMMSXXSSMS
XMAMXMAAMSMSMMSSMMMSSSSMAXXMASMMSXMASXSASXAXAXMXAXASAMXSMXMAMMAXSXSASXMXAMXMASMSSMXMMMAMAMAAAXMAMSAMXMMSXASXSXMMXAMXMAMMASAMXMXMMSXAMSAMXAXA
SMXMASMSSMAMXXAXAXXAAAMMMMASASMMMMSMSMMMXMMSXMMMMXMMMMMMMAMMSAMAMAAAXAMSAMXSAMAAAASMSSXMAMXSMMMXSASAXMASXMMAMSSSSMMMMXMAMXMAXMXSAMMMXMAMSAMM
XAASASAMXMAMXMASXMMMSMMAMSXMASMAMAAMMAAXMAMSXXSAMASAMAMASXSAXMXMMXMXMXMAASXMASMMMMMAAAXSASXXAXASAAMXSMMSAXMSMAXMAXASMSXSAMXXMAAMASXMXSSMSMMX
MSMAAMXMXSMSAMAMMMSAAXMAXMASXMMAMMMMSXMMSXXMAASAXAXAMAXXSXMASXSXMSSMMASMSMMSAMXSXMXMMMMSASMSXMMXMXMAMXASXMMMMXMSAMXAAAAXSMASXMMMMMMMXMAXSASX
AAXMXMMSAMASXSASAAMSSSSSMSASASXXXAXXMSSXMXAMXMSAMSSMSSXMMAMXMAMSAAAASASXMXXSAMASAAXXXSAMXMMXMXSXMAMASMXSMMMAMAAXSMMMMMXMAMASAAMSMAAXSAMXSAMS
SSSXASAAAMMMMMAMMMXMXAAXAXXMAMASXSMASAMAASXSAXMAMXAXAAASMSMMMMMMMMSMMXSAMMAXAMASAMMMMMAXMMMXAASASXSASAMXMAAAMMSMMMAXXXAXMMASMMMASMSMMAXXMAMX
XAAMAMMXMMAASMSMXMXXMMSMMMSMMMMMAASMMASXMAMSMSSXMSXMXSMMAAMAASXSSMXXSASAMXSSMMASAMAAMMMMSASMSMSAMMMXSMMXSMSSSMAAASXSASASXMMSASXMSXMASAMMSSMM
SMMMXSMMSXSAMXXAASASAMXAMAMXAAAMXMMXSAMXMAXXMAXMXSMMMMAXMMMSXSXAAASAMXSMMMXAMMAXAMXMXSSMXAXAAXMAMASMMASXMAXXAMSSMSXSAMSAMXXSAMMXSASAMMSMAAMM
XAXXXMXAXAXMASMSMSASMXSMMSSSSSXXAXXAMASMSMSASMXSAMAAASMMMSXMAMXXMMMAMXMAMASAMXSSSMXSAMAAMSMSMMXAMSMAXAMAMAMXAMXMAXAMXMXXMMXMMMSAMAMASASMMMMM
SMMXXMAXMMMSXSXAXMAMMMSAMXAAXMASMSMMSAMXAAXAMXMMASXMXSAAXSAMXMASXXSMMAMASMSXAXMAMXAMASMMMAAAASMMMASXMSSSMMSMSMAMXMXMMSMMMXXAMAMXSAMXMAXAMAXX
SMASXMSXSAMXAMMMSAMXSAMAMMMMMMMAXMAMMMMMMXMXMXASMMXSMMMMXSAMXMXSXAMASASMSASMSMMXMMXXMMMXXMMMXMAMSAMMXMAMXAMXAMMXSAASAMAAASMSMASASAMAMXMSMMSA
XMASAAXXSMSMXMAMAMSAMXSAMXMASAMMSSSMAAMSASMSSMXSASMSXMAXXXASXMXSMXMMSASAMAMAAASXMMMMSAMMXSAMXSAMMSMMSMAMSAMSMMSAMSMSASMMMSAAMAMXSAMSMSAXAAXM
SMXSMMMXMSAMXSXMAXMASASMSMAAXAXSAMAXMMMXAMAAAXASMMAMMSMSSSXMASAXAASXMAMMMXMXMSMAAXAASAXSASAXAMAXAMXAMMAXMAMXMAMXMXXSXMXXXMMSMSSXMXMAAMASMMMM
MMMMAMMAMMXSXXXSSXSAMASAAMMASMMMASMSXSAMXMMXMMAMXMAMMAAAXMASXMXMXAMAMXMASMSMMAXMMMMXMMXMASMMSXSMSMMSSSSXSMMSMSSMMSMSMMSXXMAXAMAMSMSMSMMMMAAM
MAAMAASXMSAMAXMXAAMASAMMMSSXMAASXMXXAAXMXSMASAXXSSSSSMMMXMMMXMXMSSSMMXMASAAASAMMXMMMMMAMMMXAXAMAXXAMXMMASXAXSAAAXAXMAMAAMXMMSMSAMXMXXXXASMMM
SSSSSXXAAMXMAMAMAMSXMAMXMAXAXMMMSMXMXMMAXAMXXAMXMAAMMXSAASAMASXAAAAMMSMAXXXMMAXSASAAASASASMXSXMAMMMSAXMAMMMMMSSMMMXSSMXXMAXAXXAMSMSMMXSXMMSS
XAAAXAMXMSSSSSSSMXSMSMMAMMSSMMSMMXAMXMXXMMSSMASAMMMMXAXSASASAXMMMSMMMAMMMSMMMXMSAXMSMMASASAASMMXMXASMMMSSXSAMXXXAXAMXMAASXMMSMMXSAAAMXMAXAAA
MMMMMXAMAMXAAMASMAMMAASXSAAXAMXAAXXSSSMSMXAXMAXAXMXSMSXMXSAMMXSAAAMASMXSAAXSXXXXSMXXAMMMMMMMXASMSMMSAXXMAAMXMXMAMAAXAXSXMAMXAAXAMSSSMAXSMMSS
SSSMSMSSSMMMMMAMMASMMMMAMMSSMMSMMSXAASAAXMASMSSMSSMMAXXMAMAMXASMSXSXSAAMSSMMAMMAXMXMAMXAXXXMSAMAMSXSAMXMMMMSXMMSAXSMMMXAXMASMSMXXXXXMSXXAXAM
AAAAAAAXMASMSMXSMMSAMSMMXAMAMAMAAXMMMMSMSSMSAXAAAXAMSMSMXSAMMMSXMXSAMMMMXMAXAXMAMASXSMSSMAAXXSMMMMMXMXAMMSAMASAMMMXASMSSMMASAXASXSAMXMASMMXS
SSMMMMMXMMMAAMASXMMAMXAMSMSAMASMXSASAAMXMAAMXMMMMSSMAAMAASASXXMAAAMAMAXXXASMMSMXSAXAAAAMMSMAAXMXAMSMSMXAAMASAMAAXXSAMAAMAXXMASXMAMXMAMXSAMXA
MXXXXXASMXMSMMAMAXSAMMAMMASMSMSAAXAXMSAASMMMMSXXMAMMMSMMMXAMMXSXMSSMXAXXXMXSAAMAMXSSMMMSAMXMSMXMASAAAAMMXXXMMXMMXMASMMMSAMXMAMAMXMAMXSAMAMSM
MAMMSMXXAAMAMMMMMMMAMMMXSAMXMAMMMSSXAAMMXAXMASASMAMXSXMMSMMMAAMAMAMMMMMSAMAMSMSSMXAXAXXMXSXXMAASXMMSMSSMSSSMMXMXXMAAMXXMAXXMASAMASAMSMMSSMAX
MASXMSSMMMAAXAAASASMMASXMASXXAXAMAMMSMSMSAMXSMAMMSMXMASAAMASMXSAMAMAAAAXAMAMAXXAMSASXMXMMMMMMSMMAAXMAMXAAAAAAASMMMASXASAXSASASASASAMMAAAAXXA
SXXAAAXAAXMMSMSXSAAAMXSAMMMASASXMASXAXAXAXMXAMXXAMMAXAMMXXASXASASMSSSSSSXSXMSXSMMMAMMMAMAAAXAAAMXMMMAMMMMSMMSXXAXMAMAMMAMXAMASAMMSXMSMMSSMMA
MSMMMMXSMMXMAXXMMMMXMAXAXMMXAXAASAMMMSSSMSSSXSAMXSSSSSSXSMASXXMASAAAAAMXAMXAMAMXMMAMXXAMXXSXSSSMSXMMXXXXAMXAXXMSMMMSAXMAMMXMXMAMMXMMXAMXAAAX
AXXSAMAXAXSMMMSAXAAAMXSAMXXSMMXMMXMAMAAMAAAXMMAXXXAAAAAASAMXMXMASMMMMMMSAMMXMAMASMMAXMSSSXMAMXMASAASXMSSSMMSSSMXASASAMXSSMMSXSXMXAMMSSMMSSMS
MAMMASAMAMXAXASMMMMMXAXMASAMXMAXXXXAMXMMMMXMMSAMXMMMMMMXMXMAMXMASXSXXSASASASMSMASAMXSXMAAAMSMMSAMMMMAAAAAAAAXAASAMASXMAXAMASXSMMSASAAXMMAMMA
MAMSAMMSSMSSMASMSAMSMSMSXMAXAXMSMSSXSAXXAASAMAXSAAXXMXSXSAXAXAMASMSAMXASAMAXMAMMSAMAMXMAMXMASAMAXXXXMMMSMMMSSMMMXMMMMMXSAMXSAMAXSAMMXXAMAMXM
SAMMXMXMAXAXMXMAMASAAAAAXSMSMSMAAMAASMMMXMAMSAMSMXSAMAMXSASXSXSAMMMXMMXMAMMMSMSMSMMASMMMMMSASXSXMSMMSAXAAMAXXMAMAMAAASMMAMAMAMSMMAMMAMSXSSSX
MXMMMMSMMMSXMAMXSSMMSMSMAXAAAAMMSMMMMAAAMXAXMAMXMASXMASASXMAAXXAXSXSXMAMXMAAMXXAXXXXSAAMAMMMSAMAMXAASASXXMMXXMASAXMSMXAXXMMXXMAASAMMAMMAXXMX
AMMSMMAAAAXXSMSAMAAMXAMXAMXMSMSXMAXMSSMSAMMXSAMXMASASASMMAMXMMMMMSAMXSASASMSXSMMMXSAMXMSAMAXMASAMMXMXXMMMMSMAMAXMMMXAXSMSMSSSMSMMMSXMXMXMASM
SAAAAMSSMSSMXMAXSSMMMSMMASAAMASAXXMXAMXMMSAASASXMXSASAMXSAMAXAXAAMSMAMMSASXMASASASMMSAMXMSSSMASASXSMMASXAAAXAMSMSASMSMXAAAAASAAXAXSXSASASAMA
AMSSSMAAAXXAAMXMXMASXMXMASMSMAMMMSXMASMMASMASXMMSMMAMAMXSASXSSSXXXAMXXMMXMMSMSAMMSAMMAMSAAMAMASXMXAASAMXMMSSSSXASAXAAAMXMMMXMMMSSSMASASAMXSS
MXMAMMSMMMMSMXMSMSAMAMXMASXXMXMAAMAMXMAMAMXXMASAAMSASXMAXAXASXMMSSMXMASMMMMSAMXMAMMMSAMSMXSAMXMAXMSMMASMSXMAMMMMMAMSMSMXXMMMSXMAMAMXMMMXMAMA
XSMXMMMAXMMASAAAAMXSXMSMASASAMSMSSMXAXXMASMSXMASMXMASMXSXMMMMAMMXAMXSASAAMAMAMAMSSMAMAMXAXSMXSXMMAAAXXMAAMMMMSSXMXMXAAMXMXAAXAMASMMMAXSXMASM
SMMSAASAMXMAMMMMSMXMXAMXAMMMXAMXMAMSMSASAXAXAAMXXSMAMMAMAMASXSASMSMXMASMMSASXMAAMAMASXMMMMMAMXASMSSXMMSSMXXAAAMAXSMMSMSAASMSXXXAXMAXMMMASMSX
XASMMMSMSSMMMSASAMASXMMMMSSMXSMMMAMAAAXMMSSSMMXXAMMSMMAMAXXSAMMSAMXMMMMAXSASMSXXSAMXAASXMAAAMXSMAAAXSAMMXXMMMSSMMAAXAASXMMAAASMSSSSXMASMMMSM
MMMMAXMXAAXSASMSASAXXMMAMXAXXMAXSSSMSMXSXAXAMXMMAMAXMSMSMSMMAMXMAMMMAAMAMMXXAXAXXXXAXMMAMMSASXAMMMSMMAXSAMXAAXAASXMMMMMXSMMMSMAAAAAMSAMAMAMA
AAAMXMMMSSMMASAXXMMSSMSASMMMMMSMAMXMAMAMMMSMMASMMMSSXAMAAAAMSXXXAMASXMXAMXAMSMSMMSMSAXSAMMXAXXXMXXXXSMMMMMSMSMMMMAMXXASAXMAXXMMMMMMMXASMMAXS
SSMSAAMAMXMASMMMMAXAAASMSMXXXAAMXMMSAMXSAXMASXSAXAAMXSSMMMSSMMSMSXXMAMSMMMXMMAXAXAAAMMSAXXMMMMMMMMAMXMAAAAAMAXXAXXMXAMMASASMXMAMSXMMSMMMMMMM
XAASMMMSMMXSXMXASXMMSMMMMMSMMSSXSAASASMMMSSXMASXMMXSAXMXAMXAAXSAMXSMXMAMAMMXMASXMMSMXAXXMSXSAMAAAXAAASMSMSMSASXSSMAMAXSMMAAAAXAXXMMAMXAMASAX
MMMMAMAMAMMMAMXMSAAAAAAMAASAMXAAMMMMMMAAAMMXXAMAXXAMXSAASASMMAMAMASASMMSASMSMMMMMXMXSMSMMXASAXSSMSSSMSMAMAXMXSAAAAAXSAMAMXMSXSSXSAMASXMSASAS
MAAMXMASAMSSXMSXSXMMSSMSMSSSSMMMMASXSSSMSSSMMMSMMMXSAMAMXAXMAMSAMAMAAAASXSXMAAMXSAMAXAAASMMMSMXAAAMAXMMAMXXSAMXMAMMMMASXMMXMAAAAMMSASAMMASAA
SXSXXMXMXMAMMAMXSAMXXAXXXMMAXMASXAAXMAMAXXAMAMAAAAAMASXAMXMSAMXXSXMMMMMSMSASMMSAMASXMMMXMASAXXSMAMSXMMSMSMAMXSAXXAXXSAMXAXAMMMMMMAMMSAMMMMXM
AAMMXSSSSSSXMMMXXMMMSXMSXMMSMMMAAXMMMSMXMSXMASXSMSXSMMMAAAAMMSSXXAXMAMXMASAMXAMMSAMMSAXAXXMXSAMXXXXAMXAAAMAMMMMMMSSXMASMSMXSMXSXMASASMMXMAXX
MAMMAMAAAAAMSSMMXSAAXMXXASAMASXMSAMXAAMXAXASAMAXAMMXAAMASXSXAAMXSXMXXSMMXMASMMMAXASASASMSXMMMMMMASMSMAMSMSASAAAMAXMAMXMAMMMMMAMAMMMMSXSAMMSS
XSAMXSMMMMXMAAAMAXMXMAMSMMAMMXAAXXMMSMSXMSXMASMMXSXSMSSMXAMXMASMMMXSAAAMASXMAAMMSMMMMXMAAASAMASAASAMAMMMASXSMSMSMSSSMXMXMAAXMAXAMXAXXXMASAAM
MMXMAXXXXMAMMMMMMSMSXXAAXMXMASMMMXMAMASAMAXXXAXMXMAMSMAXMAMSXSXXAAAXMXMSASASMMSXSXSXMXMMSMSASASMSMMMAXXMAMXSAMASXAAMMMMAMXSSMMSASMMSMMSAMMSM
XSAXSSMXASXSSSXSXAXAAASMXSAMMMXASXMXSMSASMMMSMAMAMAMASAMXAMXXMASMMSSSMXXAXAMAXSAMAMAMXSAMXMMMMSXXAXSMMMMMSMMAMAMMXMMXASAXSAXAAXAMXXAAAXAXMMM
MMMMMAAMXMXAAAASXMMMSMMAXMAXXXMMMAXAMXSXMAAAAMASMMASAMXMSXMAMSASAAAXMASMMMSMMXMAMXMAMAMMSAMSSXMAMSMSAAXAAAAMXMXXMXAMXXMASMAMMMMSMMMSMMMSMMAS
AASASMMMSMMMMMSMAXSAMAMMMXXMSMSASAMXXXMASMMSMMASAXXMXSXMAMXXXMASMMXSMMMAAAXAXXSSMMMAMXSASXSAXMXMXMAXXMSMSSSMXMMAMSMMXMASMMMMAXMAASAAASXMASAS
SMSASXAXAASXXSAXXMMASXMSSSMMSAAAXSAMMMXAMXMMMMASMMSAXAMXMMSSSMMMXSSMMAXXMMXAMMMAASXSMAMMSMMMSMAMSMSMSMXAXAMXMMXSAAAMSAMXXAXSMSSSMMMMXXASAMXS
XAMAMMXMXAMXMXAMMMSXMASAAAAAMXMSMMSMASXMSXAAAMXMXAMAMXSXXXAAAXSAMXAASXSSSXSASXSMMMAMMMMXXAAXAMAMMAMAAAMSMMMSMMAMSSSMXAXAMMXXAAXMXXXSAMXMAMAS
MAMSMMXSMSSMSMXMAXMMSMMMSMMSMSMXASAMMSAMAAMXSSMSMSXXAXMASMMXMMAXSXMMMXXAAASAAASXSMMMAXXMMSSSSSSSMAMSMXMXASASAMXMAXXMSMMMMSAMMMSAMXAAXAAMXMXM
SSMMXSAXXXAASXSXSAXMAXMAXMMAMAMXMSASASAMMXMAMAAXAMMMSSMASAMSSXMASMSSXSMMMMMMMMMAMSXSMMSAMAMMXAXXXAMAMXXSMMASAMSMSMMMMXAXMXMSXXXMAMXAMSXMASAM
SAAAAMXSMMMMMAMAXMMXMSMXSAMASASMXXAMXSXMXAMMSMMMAMAAAXMAXAXAAAXAXXMSAMAAMSASXSMSMXMXMAMSMASXMSMSSSSMMXMAAMXMAMXMASAAMMSSMAMMAMXMXAXSMMXMASAS
XSMMSSMMXMAMMMMSMXSAMXMMMXMASAXXSMAMAXMASMMASAMXXSSMMMMSSMMSSXMASMMMMMSMMSAXAXMASAMXMASXSMMMMMAXSXAAAXSXMMMXAMXMASMXSAAAXASAAMAMMSMMASXSXSMM
MMMSAXAAAXAMAAXXAASAMMMXAMMMMMMAMXAMXSSXMAMASAMMAMAXXSXMAMAXMASAMXAAXXXMMMSMAMSASMSXMMSAMXAAAMXMMSSMMXMMSAAMSSSMAXMAMXMSAMXXSSXSAMASAMAXAMXS
AAXMASMMXSMSXSXMMMXAMXAMSSSMAXMAMSXMXMMMSMMAMAMXAMXMMAMMAMSXMXAMXSXMXXXXAAXMXMMASAAMMMSMSSXSSSXSAAXASASASMSMAAAMSMMXSMSMASMMXMXMASAMMSMMSMMX
MAMMXMAAXSAMAMAASXSMMMXSMAAMMMMAXSXSAAAAAAMSXSMSSMSAXMMSSSXASAMXXMAMSMMMMSMMASMMMMMSAAXAXXAMAMXMMSMXXAMAMAMXMSMMAASASMAXAXXMASXSMMMSMAMAXAXX
AAXAAXMASMAMAMXMAMXAAMXSMSMMMSXMAXMASMMSMSMXAAMSAAMSMXMAMXXXMAMMMSXMAAMSMMMSAXSMXSASMSMXMMXMAMXSAXXAMSMSMSAMXAAMSSMAMMSSXMAMXSAMSMXAMASXMMMS
SASMMSMSMXAMSSXMXASXXMASMXAMXSAMXSXMXXXAXMAMXMMMMMMMMSMMSXSSSSMAMAXSSSMSAAMMSMAXXMASAXMASMMSXMAMASMMMXAXMAMMMSMMXXMAMAXXMXSSXMXMAMMMSXSASMAX
MXSXSAMXMSSSMMMSMMMSAMASXMASAMXMAMAMMSMSSMAMSSXSASXMAAMXSAMMAXSXMAXAAMASMMMAMMXMMMMMMASAXAXAMMAMXMASAMSMSMMSAMASMMXSMMSAMAMMMSASASAMXAMAAMXS
MAMXMASXAAMXAAAAAAAXMMXSXXMXMMSMMSAMMMAAXXXMASASASAMSMSAMAMMXMMMASMMSMAMAMMASAMXAAXAMMMSMSMMXSXSXSAMASAAXAAMAXAMAXAXAASAMMXAASXMASXXXXMXMAMX
MAMASMMMMMSMSMSSSMSMSAMMMXSAAMAAMSXSAMMMSAMXMXMMAMMMXAMXSSMXXAXAAMXXAMSSSMMAMXSXSMSASMAXMXAXAMAAAMASMMMMMMMXAMSSSMMSMMSAMXMMXXMSMSASXSMMXSMM
SXSXSAAXMASAMMMMXAAAXMAMSASXSSMSMXXSASXSMMMSMMMMXMXAMAMMAMMMSSSMSSMSMSMAXSMXSXSAMAXXAMXMASMMMSAMXMXMASXSMXSMXSXAXXMAMASMMAASMMAAAMMMAASAAXAX
AMMXMXMMMASMSMSSMSMSMMMXMAMXXAMAMXXMAMXAAAAAXAAAAMMMMAMXAXAXSXAXAXXAXAMMMXMMAAMXMAMXMASMAMAAAXMXXSASMMAAMASXSAMXMMSAXXMAXMMAASXMMMAMSMMMMSMM
XASMSMXAMXSXMAAXMAAAASXMMAMSSMMAMMMMAMMSSMSSXSXSXSASAAMSXXXSMSMMMSSMSXSASAMAMXMMMXSXSXMMSSSMSSMSMXASXMXMMASXSMSAMXSXSSSSMMSSMMASMMXMXAXXAAXM
MSXMAMSMSASAMMMSSMSMXMAAMMXMAMSAXAASAMAAXXMMAXAMASASXSXMSAMXMAXAMXMXMASMSAMAMAMSMMAMMSMAMXXAXMAAAMSMMMSXMASMXASXSAMXMAAAAAAAXSAMXMSAMXMMSSSX
SMMSAMMAMASAMXXXMAXXXSMMMSMMSMSASMMSAXMASAXXAMAMMMAMMMAAXXMAMMMAMAMMSMXXSAMXSASASAMAAAMAMMXMMMSMMXAAAAAXAXXAMXMAMMSXMMMMMMSSMMMXSAMMSMXXXAMX
AMASMMMXMXSAMXXAMSSSMSAMASAAAAXAXXXMXMXMAXMMXMAMXMAMAMMMMASXSSSSXMSAMXMXSXMASXSMSSXMSSSXSXAXAXXASXSSMSSXXAMSASMXMMAMXAMASXAMXMAAMASMAMMSMSMS
MMMMAXSMXMSXMSXMXAAMASMMASMMMSMSMSMSMMMMSXXAMSSSMSSSMXAAMAMMXAAAASMMMASXMASXMASXMASMXAXMMXSSMXMAMAAAAXMMSXMAAMXAXMAXMASAXMMMAMMMSAMMAMMMAAAX
XSXSMMAASMMXXMASMMSMAMXMMSXSMXAAAAXAMAAXMASMXAMAAMAAXSXMMAXAMMMMMMASMMSASASAMAMAMMMMMXMXXAMAMSMAMMMMXMAAMASMSXMSXMXSAXMXSAASASAMMXSSMSSMSMXM
MXXSXMSSMAASMSAMAAAMXSAMAXAXAMSMSMSMXSXSXAMXMASMMMMMMMASMMXSAAMSMMAMAASXMAXMMMSMMMAXXMAMMMSAMASMMXXXAXMMSAMAMMAXMSAMXMAXXXMMXMAXSAXMAXAAXAMX
ASMSAXMAXXMSAMXXMMMMXMASXMMMXMAAAAAXMMAXMMSSSMSAXXAXAMAMAAAMMXMAMMMSMMMMMSMAAAAAAXXMXMSAAASXSASMSSSSSSSMMMMAMMMSAMASAMSMSMSMMSSXMASMSMMMSAMX
XMASAMXAMMXMMMMSSMSXMSMMAXSSSSMSMSMSASAMAXAAAASAMSSSMMSSMMMSMMSXXAMSXAXMAMMMMXMXMMSXSAMXSMMAMASAXAAAAXXXAASMSAXAMSAMMXAAAAMMAXMASAAAAAAAMAMX
XMXMMXMASXMXAMXMAAXSAASMXMXXAAAAAXAMAMAMXSMSMMMAMAAAXAXAMXAAAMAXMAMSMSAMXSASXMMSAXAAMAMMMAMAMMMMMMMMMMSMSXSAMMSMMMASXSMSMXMMXSSXMMSMSMMXSMXS
XXMASAXAXAMSAMXSMMMASMXXAXXMMMMMSMXMAXAMXMAMXXSMMMSMMXSASMMSSMASMSMSAXXSASMAAAASMMMXMXMASXMMMAAAAXSAXAXMMAMXSXMXAMMMAAAMAMSSMMXMAMMAMMMXAXAM
MMSXMAMXSAMXAMAXXXXMXSXMMAMSXXXXXMMSMSXSAMSMXMAMXMMXSMMAMXAAXMMMAAAMSMSMAXXSMMMSXAAXXXSXSMMASMSSMSMSMMSAMXMMSAMSMSSMSMMMAMAAXSASAMXAAAMSMMXS
SASAAXAXMAMXXMSSMMSXAXMASAAAMASAAXAAAAXMXMXAMXMSAXSAAAMSMMMSSSMMMMMMMXMMAMXXMASXMXSSMASMMXSASXAXMSAMXMMXMAAASAMXAAXAXAXXAMXMMSASASMSMMXAASMS
MASMMXSXSSMMXXAAAAMMMSAXSAXXSASMMMSXSSMAAXMSMAMSASMAMXAXAXXXAXXAMXMMMAMAMMSASXSAXXAAXAMAMAMASMMMAMMMMXASXMMXSAMMMMSMSMMSSMXXMMAMASXMXXMSSMAS
MMMMMXAAAXMASMMSMMSAMMXMMXMXMMMXMAMMMAMSMMAMMXMMXMMAMMSSMMMMMMMMASAMSASMMASAMAMMMSSMMSXXMMSASAMSSSMAMMXXAXMAMAXXAAAAAXAXAAASXMMMXMASXMXXXMAM
MAAAMXMMMSAMXAXAXAMASAXSAMXXMMSSMXSAXAMASMMSMMXMMAMASXAAAAMSXSASMMAXSAXAMXSAMMMMXXAAAAASMXMASAMAAMXAXMASMMMMSAMXASMSAMXXXMMSAMXXASXMXMAMMMMS
SMSSSSXSXMMXXSMAMXSXMASMSMMMSAAAAXXMSASASXAAAMXSMASMXMSSMMXSASASXSMMSMSSMASAXSAMXSMMMMSAAAMMMXMMSMSMMSAAASAMXAMXAMMMXSMSXMAXXASMXXXMAXAXMAMS
AXMAXMAMXSSSMXMXMMMMMXMAAXMASMSMMMAMSXMASMSSSMASMMMMMAAMASXMAMAMAAMAXMAAMXSAMSAMXAAAAXMMAMXSASXXXAXMAMMMAMXSMAMAXMAMAAAAAMSSMMAASMASXSXMXAXX
XASXSMSMAMAAAMMAAAMXMAMSMSMMXXXAXXXMMAMAMAMAAMXSAMAAMXMSAMXMMMAXSMMSMMSSMAMAMSXMXXXMXSSXSXXMAMAMMSMMMSSMMXMAMXXSSMSMAMSMXMMAMXMASMXXAAMSSSSM
MXMASAMMASXMMSSSXMSMMAMMASMMMSSSMMMMSAMXXMAMXMASAMXSAMMXMASMASXMMXXAXMMMMXSSMMMMXMMSXMXAMXXMAMXMAMAMAAAXSAMXXMMMAAMXSAMXAMXAMXXXMXMMMMMXAXMA
AASXMAMSMMAMXXAAMSAMMSSMAMAAAMAMAMSASASMSMSAAMASXMAXMAMAMMMXAMASXSSMMSAXXMAMXMASMMAMAMMXMAMXSAAMXSAMMSSMSASXAAASMMMAXAMSSSXXSSMMMAXAXXSMMMAS
SASAMMMASMAMAMMMMSASXAAXSSSMXSASAMMASASAAAASXMASAMASXSSMXXAMSXMMAAMAAMMMMMSMMMSMSMASAMMSMASMMSASASXSXMAASAMXASXSAAMMXAMSXSAAMMMASASMSMXAAAMA
MAMMMXXAXSAMXMASXMAMMSMMMXAAAXXMAMMMMAMXMXMMMMASXSMSXMAMAMSXXAMMSMMMMXSAMAAAASAAASMSXXMASASAMAXMAMXMAMMMMAMSXMASXMXSSSMSAMMSMASMSASASMSSXSMM
MSMSASMMMSMMAMXXXMAMXMASXAMMMSMSXMSAMXMXSXAASMMSAAMMASAMXAMASXMAMAMXMASASXSMMMMSMMXMAMSAMMSAMMAMAMASAMXASAXSAMMMMSAMXXAMSMAAXXSAMMMASXAAMMAX
XMXMASXXAXASMSXMASASXMASMXSAXAAMSASASMSAMSSMMAXMXMAMXMXSMXMAMAMXSAMXMASXMXXAMXXXXSMSAXMASAXAMXXSSSMSASMMSXMMXMXAAMMSAMXMXMSMSMSMSXMASMXSASMM
XSASXXMMSMXAMXMAMSXSAMAXMAMXMMSMMXSXMAMXMAMASMMSMSXMSAMXAXMAXXMASAMXMASMSAMXMMSAXMASMMXXMASXMSMMAAXXXMAAMAAXAXSMSXXXMAMXMXMXSASASXMAMXMAXXXX
MSAXXAMXMSAAAXASAMXSXMXSMMSMSMMXMXMXMMMSMASMMMAAAMAMXAXSSSSMSMMXSAMSMMSAMAMXSAMXMMMMASXMMMAMXXAMMMSSMMSASXMXMXAMAMSMSSSMAAMXMAMAMXMASMXMASMX
AMXMXSMAXAMAMXXMASAXAXMAXAAXAMMAMAMAMASAMAMAAXSMSSXMSSMMAAXAAXMAMAMXAAMMMASMMXSAMXAMAMAAMASMMSSMXAAXAMXXMASAXXAMXMAAAAAASAXAMAMAMXSAMMAMAAAX
SSMSAMASMMXSMSMSAAMSXSXAMXXMMXSASASASXSASMSSMXMXMAAXAMASMMMSMMMAXAMSMMSMMMXAAAMAMSASXSXMMAMAAMAXMASXSAMXMAMMSXMMSMMMMXMAXASMSMSSMMMAXMAMMMXM
XXAMASMMAXMMAAAMMSMAAMMSSSXSXAXASXSXSMSAMXMXMAMAMXAMXSAMAXXXMAXSSXXAAAAAAMSMMXSAXSAMXAXAMXSMMMMXMAXMXMXAMXSAMASAMXSMMXMASMMAAMAMAXSMMSSSSSSM
XMXMXMAXXMAMMMMMAAAMAMAAAXAMMMSMMMSMSAMXMMSMSASXSAMXXMAMXMXMASXAAMSSSSSSMMAMAMMMMMAMMASMSASMAMXMMAMXAMSASAMASXMASAMAMXMAXMXXMMAMSMSXAXAAXAAA
SMMSMAASMMMSXSMMXASMMAMSMMSMAAAAMXSASMMASXAAMMXAMXMMMSSMMAASAXMMMMXAAAMAMSMMMSAMMSMMXAAXXAXXAMASXSXSMMAXMMSMMXSMMXXAMXMMSSXMXMXMXAMMSMMMMSMM
SAAAAMMSAAASMXXASMMXXAXAMXASMSSSMAMXMASAXMXSSSSMSASAMAMAXSXSAMMSAMMMMMMMMAAAAXAMAAXXMMSSMAMSSSMSAMMAMAMXSXMMXAAMAXXSSMSAAAAXAMXMMAMAMAAMMXAX
SMMSXAMSMMMSASMMSAASXXXAAXAXMAXAMMSMSMMXXSAAXXAASASMMASMMMXMXMASASXAXAAAMXSMSMSMSSSMSAAAXXMSAAAMXMAMSAMMMASXMMSMSSMMAMMMSMASASAAMAMASMMSAMXM
XAAMMXMMAXAXMAAASMMMASMAMSMXASXMMAAAAXXMAMMXMMMMMAMXSXXXASXXAMAMAMMMSSSXSAMAXAAMAAMAMMXSMSSXSMMSAMMMXASXMAMXXMAMAAAXAMAXAMASASXSMAXXXAAMMSAM
SMSXSAASMMSMMSMMXAXMAMAMXAMMMMAXMSSSMMSAAXSASAAXMXMASMMSMMMXXMSSXSAXXAAAMAMAMSMMMSMSMSXXAMXAXXXSASMSXMAMMAMMMMMSSSMSSSXSMMMSASAMXSMSXSMSASAS
XAAAXSXMMAXAAXXMXSMMXSXMSAXAASXMMXAAAAAXXMSASAXSXMAMMXAAAASMAXAAASMMXMMMMMMXMAXXXAAAAXAMSMMAMXMSAMAAMSASXSMSAAXAAAAAXXXMXMMMMMASAMAMAAAMAXAM
MMMSMMMMMAMMXMASAAASAMAMXMSSMMSMMMMMMMSSSMMMMXMSAAXXSMSMMMXAXAMMMMASMXAXASMSMMSSSMSMSMMMAXSAMMAMXMXMMMAMAAASXXMMXMMMSMMSMMXAXSAMXMAMSMMMSMAM
XXAMASAMMMSMXSAMASXSASAMAMXMAMXMXMASXAXAAMXASAMMAMMMXAAXSSMSSMXAASAMAXMSXSAASAAAAXAXMASMXMSASAXAASASMMXMMMMMMSMSXMAXAAMAAMSSMMASXMXMXASAXSXM
XMASXMSXAAAXXMMXMXMSAMXSASMSXMXSAMXMASMSMMSASASXSMMAMMMSAASAAMMMMMMSMSAMXMXMMMSSMMMXSMMXMXXAMXXSXMAMMASMSSMMAAAXASMXSMMSSMAMXSSMMSSXMAMXMAMX
ASAMMMAMMXSXMMSAMAMMSMAMXSAMAMASAXAXAXAMXMXXMAMXAAXMMMMMXMMSSMMSAMXAAMMXSMXXXAAAAAXMSAMMSAMSMSXMXMAMMASMAMAMSSSMMMSXXAAAXMASXMAXMASXMSAMXXAS
MMMXAAMMSAXAAASMXXSAMMMSMXASAMASAMSMSSSMAMSSMAMSSMMSMAAAMXMAXAASASMMSMMXMASXMMSSMMMAXASAMXXAAXMAASAMMMXMAMXMAAAASASMSMMSXXMXAMMXMASXMAAXMASA
MAAMXMXAMASXMMSXSXMMSXSAMXAMMMAMAMMAAAASXSAAXAMXAAAAMSMXSAMSSMMSXMXXMAXAMAMAAMAMAASMSMMXSMSMSMMSMSASASMSXSAMXMMMMASASMAMMSSSMMMAMXXAMMMMMMXM
MSSSMASAMXMAXXXAAXAASMSASMSMXMASMMMMMSMMMMXSMSSSMMXSMXAXSAMXAXAXMAXAMMSSSSSSMMASMMMAAXAAXMAMXXMMXSASASAAMSXSXSMXMMMXXMAXXXAASMSSSXSAMASMSAMX
XAAAXASAMMSMMXMAMMMXSASAMAMASXMSMXXXXMASXAAXAXXAAAAXMMSMSMMSMMSSSSMSXAXXAMMAAMASAMXMSMMSXSASXSXXAMXMAMMMXSAMAXMASASXMMMSMMMMMXAXAAXAMXXAAXXM
MMSMMAXAMXAAXXMAMMMMMMMMMXMAXAMMMMSAMXMSAMXMAMSSMMMSAAMASAAAAAXMAAAMMMMMSMSMMMMSAMMMXAXMASMSAMMMMMMMXMXMXMAMXMSXSAXXAAAAMMMAXMMMMMMSSSMSMSSS
XAAXAMSMMSSSMMMASAAAAXAXAXMSSSMAAXAMXSXSXSXMAMMAMMMSMMSAMMSSMMXMMMMMAXXAXMSAMXASAMXAXAMXXMAMXMAAXAAMMSSMMSSMAMMMMMMSSMSXMASXSASMSAXMAXAMAAAA
MSSSSMAAXAAAMASAMXXXMSMMSAMXAAXMMSMMMSAMASXSAASAMAMMMAMASAAAASXMSMXSSXMXSASMMMMSSXMASXMSSSMSASMSSSSSXMAAMAASASAXXSAAAMXAMXSMSAMASMXMMMXMMMSM
MAAMMSMSMMMMMXMMSSMSAAAXMMAMMMSSXAAMASAMAMMMSXXXSASMMASXMMSSSMSAAXAMMAMAMMMSXAXMMXAAAXAAAAASXXMXAMXMASXMMXXSSSMSXMMSSMSSMAMASAMXMAMMXSXMXAAA
MSXSAMXAMSASMMMMAMAAXMAMXMAMXAAMXSMMASAMXSAMMXSXSASAMXMAMAAMAAMSMMXMMAMMSMAASXXXSSSXMMMMXMMMMSMMASXSAMASXXXXXXMSMSAXXAAXMAMXSAMXXMASAMMMSSSS
XXAMXXSAXSASAAAMASXMAXSMMXAMMMSSMXAMASAMXMXAAASMMAMXMASAMMXSMMMXXAXMXMSMAMSMXSXAMXAAAMAXSAMXAAAMAMAMXSXMSMMMMMMXAMMSMMMXXAXAMAMMXSXMASAXMAAX
XMSMXXMMMMMMMSXSMSAXSXMASXSSSXAXXMAMXSXMXXAMMMXAMXMSSXSMXSAAAAAAMSMSAMAXXXXMAAMMMASMXXASMXMASXSMMMAMMMMMAMAAAAAMSMAAXAAXMXMSMSMSAXASASXSMMMM
MMAMXMAAXAAXXXAAAXXMMAMAMXAAXMMSSMMSAMASMSMXAXMXMAMASMXMAMMXMMXMSAAXASASMMAMXMXAAXMXXMXMMASAMAAAXSAMXAASASMSSSMMXMSSSMSSXSAMAAAMASMMMXASMAMA
XMAXASXMSSXSAMMMSMAAMXMAMMMMMSAAAAAMAMMXAAASMSAASXMASXMMASMSXSAMXASXXMASASAMXSSMSSMMXMSASXSAMMMMMAAMSMMSASAXMAXMAMMMMMAAASAMAMXMAMMAMMMMAAXS
XSSSXXSAAAXMAMXAAXSMAASASAXAAMMSSMMSAMXMMMXMAMXXMAMASASAMXAAASXMSAMXMMXMAMASAMXXAAASAXSAMASXMXMSXMAMAAMMAMMMMAASASAAAMMSMMAMXXXXXASAMXMASMSA
MAASMSAMXSXASAMSSMXMSMSASXSMSSXMAXXSMSXXSMAMXMMMAAMMSMMMAMMMMMSMMASXMASXSSSMASAXSSMMXXMMMMMXMASAXXXSSSMMMMXMMSMSASXSXSAMMSXMAXSAMXSXSAXMASXX
`.trim();
}

export function getTestInput2() {
	return `
.M.S......
..A..MSMS.
.M.S.MAA..
..A.ASMSM.
.M.S.M....
..........
S.S.S.S.S.
.A.A.A.A..
M.M.M.M.M.
..........
`.trim();
}

export function getInput2() {
	return getInput();
}
