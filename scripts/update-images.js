const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/islamicData.ts");
let content = fs.readFileSync(filePath, "utf8");

const map = {
  "masjid-demak": "/heritage/masjid-demak.jpg",
  "masjid-kudus": "/heritage/masjid-kudus.jpg",
  "istana-maimun": "/heritage/istana-maimun.jpg",
  "masjidil-haram": "/heritage/masjidil-haram.jpg",
  "masjid-nabawi": "/heritage/masjid-nabawi.jpg",
  "benteng-ajyad": "/heritage/percetakan-quran.jpg",
  "hagia-sophia": "/heritage/hagia-sophia.jpg",
  "masjid-biru": "/heritage/masjid-biru.jpg",
  "istana-topkapi": "/heritage/istana-topkapi.jpg",
  "alhambra": "/heritage/alhambra.jpg",
  "mezquita-cordoba": "/heritage/mezquita-cordoba.jpg",
  "menara-giralda": "/heritage/menara-giralda.jpg",
  "masjid-al-azhar": "/heritage/masjid-al-azhar.jpg",
  "benteng-saladin": "/heritage/benteng-saladin.jpg",
  "masjid-sultan-hassan": "/heritage/masjid-sultan-hassan.jpg",
  "taj-mahal": "/heritage/taj-mahal.jpg",
  "benteng-merah-delhi": "/heritage/benteng-merah.jpg",
  "qutub-minar": "/heritage/qutub-minar.jpg",
  "masjid-xian": "/heritage/masjid-agung-xian.jpg",
  "masjid-huaisheng": "/heritage/masjid-huaisheng.jpg",
  "makam-cheng-ho": "/heritage/makam-laksamana-ceng-ho.jpg",
  "masjid-al-aqsa": "/heritage/masjid-al-aqsha.jpg",
  "dome-of-the-rock": "/heritage/kubah-as-sakhrah.jpg",
  "masjid-ibrahimi": "/heritage/masjid-ibrahimi.jpg"
};

let count = 0;
for (const [id, newUrl] of Object.entries(map)) {
  const regex = new RegExp(`(id:\\s*"${id}"[\\s\\S]*?imageUrl:\\s*)"[^"]+"`, "m");
  if (regex.test(content)) {
    content = content.replace(regex, `$1"${newUrl}"`);
    count++;
    console.log(`Updated ${id} -> ${newUrl}`);
  } else {
    console.warn(`Could not find ${id}`);
  }
}

fs.writeFileSync(filePath, content, "utf8");
console.log(`Total successfully updated: ${count}/24`);
