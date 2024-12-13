function AppendRow(sheetId, listName, value){
  let list = SpreadsheetApp.openById(sheetId).getSheetByName(listName); 
  list.appendRow(value);
}