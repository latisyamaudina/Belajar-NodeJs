var gaji = 4500000;
var pajak = 0,025*gaji;
var hari = "24 hari";
var transport = 10000;
var infak = 50000;
var bpjs = 250000;
var total = gaji - (pajak + bpjs + infak) + (transport + hari)

console.log("Gaji kotor" + ":" + gaji);
console.log("===============");

console.log("Potongan Pajak 2,5%" + ":" + "Rp." + pajak);
console.log("Potonga BPJS" + ":" + "Rp." + bpjs);
console.log("Potongan Infak" + ":" + "Rp." + infak);
console.log("===============");

console.log("Total Potongan" + ":" + "Rp." + 112500 +  250000 + 50000);
console.log("===============");

console.log("Tunjangan Transport" + ":" + "Rp." + transport);
console.log("Total Hari Kerja" + ":" + "Rp." + hari);
console.log("===============");

console.log("Total Tunjangan" + ":" + "Rp." + 10000 * 24);
console.log("===============");

console.log("Perhitungan Gaji" + ":");
console.log("(Gaji Kotor - Potongan)" + "+" + "Tunjangan");
console.log("(4500000 - 412500)" + "+" + 240000);
console.log("===============");

console.log("Gaji Bersih" + ":" + "Rp." + 4327500);
