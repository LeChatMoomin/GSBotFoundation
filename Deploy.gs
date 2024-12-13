
/** 1)  ПРЕЖДЕ ВСЕГО НУЖНО РАЗВЕРНУТЬ ОСНОВНОЙ СКРИПТ С МЕТОДОМ "doPost(data){}, В БИБЛИОТЕКУ" 
 *  2)  ПОТОМ КОПИРУЕМ ИЗ НАСТРОЕК ТОГО СКРИПТА ИДЕНТИФИКАТОР И ПОДКЛЮЧАЕМ БИБЛИОТЕКУ СЮДА, 
 *  3)  ЗАМЕНЯЕМ "BotName" НА НАЗВАНИЕ БИБЛИОТЕКИ
 *  4)  РАЗВЕРТЫВАЕМ ЭТОТ СКРИПТ И ВСТАВЛЯЕМ ССЫЛКУ В ПЕРЕМЕННУЮ "Url", а токен бота в "BotToken"
 *  5)  ВЫПОЛНЯЕМ МЕТОД SetWebHook
 *  6)  РЕДАКТИРУЕМ ОСНОВНОЙ ПРОЕКТ НЕ ЗАМОРАЧИВАЯСЬ О ДЕПЛОЕ, ВУАЛЯ
*/
function doPost(value) {
  BotName.doPost(value);
}

//Тут должна быть ссылка на развертываение этого скрипта, как веб-прилоения
const Url = "";

//Тут токен нашего бота
const BotToken = "";

function SetWebHook() {
  let response = UrlFetchApp.fetch("https://api.telegram.org/bot"+BotToken+"/setWebhook?url=" + Url);
  console.log(response.getContentText());
}
