// Habib til — natijalarni "o'quv bo'limi" jadvalining "Habib til" varag'iga yozish.
// Alohida loyiha: script.new → shu kodni qo'ying → Deploy (Веб-приложение, Доступ: Все).
function save(d) {
  const ss = SpreadsheetApp.openById("1spDHLWxJ_ihQp1zRks9iXr-Vk41xRkSIplIg8JkrHWk");
  const sh = ss.getSheetByName("Habib til") || ss.insertSheet("Habib til");
  sh.appendRow([new Date(), d.id, d.name, d.username ? "@" + d.username : "", d.lesson, d.score + "/10", d.xp, d.totalXp, d.streak]);
  return ContentService.createTextOutput("ok");
}
function doPost(e) { return save(JSON.parse(e.postData.contents)); }
function doGet(e) { return save(JSON.parse(e.parameter.d)); }
