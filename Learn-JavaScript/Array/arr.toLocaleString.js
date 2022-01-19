const array1 = [1, "a", new Date()];
const localeString = array1.toLocaleString("vn", { timeZone: "UTC" });

console.log(localeString);
// expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
//Syntax
toLocaleString();
toLocaleString(locales);
toLocaleString(locales, options);
