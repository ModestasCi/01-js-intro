console.clear();

const name = "Petras"; /** string galima ziureti kaip i simboliu masyva */

console.log(name.length);
console.log("".length);
console.log("aaaa".length);
console.log("    ".length); /** space yra simbolis */
console.log("   ".length); /** tab mato kaip 3 simbolius */
console.log("       ".length);
console.log("           ".length);
console.log("----antras pvz--------");
console.log("Petras"[-1]);
console.log("Petras"[0]);
console.log("Petras"[1]);
console.log("Petras"[2]);
console.log("Petras"[3]);
console.log("Petras"[4]);
console.log("Petras"[5]);
console.log("Petras"[6]);
console.log("Petras"[7]);

// console.log("");
console.log("# CHARTAT / AT");
console.log("---------------");
console.log("Petras".charAt(0)); /** kitas 2pvz uzrasymo budas */
console.log("Petras".at(-1)); /** indeksuojant is galo judant i pradzia paimama reiksme*/
console.log("Petras".at(-2)); /** galioja ir masyve */
console.log("Petras".at(-3)); /** vos ne universaliausias budas kreiptis su at */
console.log("Petras".at(-4));
console.log("Petras".at(-5));
console.log("Petras".at(-6));

console.log("");
console.log("# INCLUDE"); /** atsako i klausima ar ieskoma reiksme yra ieskomajame turinyje */
console.log("---------");
console.log("Maryte".includes("M"));
console.log("Maryte".includes("a"));
console.log("Maryte".includes("x"));
console.log("Maryte".includes("xyz")); /** gali klausti ir apie is eiles einancius simbolius */
console.log("Maryte".includes("ry"));
console.log("Maryte".includes("re"));
console.log("Maryte".includes("te"));
console.log("Maryte".startsWith("a")); /** panasus tik iesko is ko prasideda */
console.log("Maryte".startsWith("ar"));
console.log("Maryte".startsWith("mar"));
console.log("Maryte".startsWith("Mar"));
console.log("Maryte".endsWith("Mar")); /** panasus tik iesko kaip baigiasi gale */
console.log("Maryte".endsWith("yte"));
console.log("Maryte".endsWith("te"));
console.log("Maryte".endsWith("e"));

console.log("");
console.log("# INCLUDE");
console.log("---------");
const istiktukas = "Pyst";
const sakinys = "Va tai pyst ir yra Petrui DOVANA.";
const sakinys2 = "Pyst par galva su pagaliu.";

console.log("Istiktukas:", sakinys.includes(istiktukas)); /** false nes is didziosios raides */
console.log("Istiktukas 2:", sakinys2.includes(istiktukas));

console.log("---------");
console.log(sakinys.toLowerCase()); /** konvertuoja nurodyta turini i lowercase */
console.log(sakinys.toUpperCase()); /** konvertuoja i uppercase */
const p1 = sakinys.toLowerCase().includes(istiktukas.toLowerCase());
const p2 = sakinys2.toLowerCase().includes(istiktukas.toLowerCase());
console.log("Istiktukas lowercase:", p1);
console.log("Istiktukas lowercase 2:", p2);

console.log("");
console.log("# INDEXOF"); /** atsako kur masyve prasideda mano ieskomas dalykas (panasiai kaip includes */
console.log("---------");
console.log("Jonas".indexOf("J"));
console.log("Jonas".indexOf("o"));
console.log("Jonas".indexOf("n"));
console.log("Jonas".indexOf("a"));
console.log("Jonas".indexOf("s"));
console.log("Jonas".indexOf("x")); /** toks sutarimas kai nera tokios reiksmes, del to visada -1 */
console.log("Jonas".indexOf("g"));
console.log("Jonas".indexOf("on"));
console.log("Jonas".indexOf("na"));
console.log("Jonas".indexOf("as"));
console.log("Jonas".indexOf("onas"));
console.log("Jonas".indexOf("onasssss"));
console.log("-----------");
console.log("Vasara".indexOf("a"));
console.log("Ananasas".indexOf("a")); /** nes iesko masyve mazosios ATKREIPT DEMESI i upper/lowercase */
console.log("Vasara".indexOf("a", 2)); /** antra a raide ieskomajame turinyje */
console.log("Ananasas".indexOf("a", 3));

console.log("");
console.log("# SLICE"); /** ties kuria vieta (skaicius nuo 1) slice inti arba ties kuria baigti slice inti(kiek reiksmes istrina) */
console.log("---------"); /** nuo starto iki nurodytos vietos */
const w1 = "Pasimatymas";
const w2 = w1.slice(4);
const w3 = w1.slice(2, -2);
const w4 = w1.slice(-2);
const w5 = w1.slice(0, 2); /** iskerpa ir isspausdina pirmas dvi reiksmes */
console.log(w2);
console.log(w3);
console.log(w4);
console.log(w5);

console.log("");
console.log("# REPLACE"); /**  */
console.log("---------");
const s1 = "Labas rytas, Lietuva!";
const s2 = s1.replace("rytas", "vakaras"); /*** ka su kokia reiksme pakeisti (replace inti) atskiriant kableliu , */
console.log(s1);
console.log(s2);

const template = "Gera diena, {{VARDAS}}!";
const userHi = template.replace("{{VARDAS}}", "Ona");
console.log(template);
console.log(userHi);

const song = "na na na na";
const song2 = song.replace("na", "la").replace("na", "la"); /** replace ina po viena na i la. siuo atveju reiketu ciklo aprasymui*/
const song3 = song.replaceAll("na", "la"); /** jei viska norima pakeisti */
const song4 = song.replace(/na/g, "la"); // nenaudot situ, nes naudoja hakeriai---> /kaKeisti/g kur g=(global)visa kas like Regex / regexp
console.log(song);
console.log(song2);
console.log(song3);
console.log(song4);

console.log("");
console.log("# REPEAT"); /** nurodytoje lokacijoje, kartoti nurodyta kieki kartu */
console.log("---------");
const superSong = "La" + " la".repeat(10) + "!";
console.log(superSong);
