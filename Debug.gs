//Тут код дебаговой таблицы, который в её ссылке находится между "/d/" и "/edit?"  
const TechSheetId = "";

function LogError(error){
  let date = new Date();
  AppendRow(TechSheetId, "Error Log", [error.name, error.message, error.lineNumber, error.fileName, error.stack, date.toLocaleString()]);
  SendResponse(291296492, "Возникла ошибка!!!\nЧекни логи!!!");
}

function LogPostData(data){
  AppendRow(TechSheetId, "Message Log", [data.username, data.user_id, data.chat_id, data.text, data.dateTime.toLocaleString()]);
}