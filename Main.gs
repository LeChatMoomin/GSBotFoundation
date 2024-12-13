class PostData{
  constructor(chat_id, user_id, text, username){
    this.chat_id = chat_id;
    this.text = text;
    this.username = username;
    this.user_id = user_id;
    this.dateTime = new Date(); 
  }
}

function DoPost(post){
  try{
    let data = GetPostData(JSON.parse(post.postData.contents));
    LogPostData(data);
    HandlePost(data);
  }catch(e){
    LogError(e);
  }
}

function HandlePost(data){
  //Отсюда начинаем кодить
}

function GetPostData(contents){
  let text;
  let chat_id;
  let username;
  let user_id;
  //Это на случай кнопки
  if (contents.hasOwnProperty("callback_query")){
    text = contents.callback_query.data;
    chat_id = contents.callback_query.from.id;
    user_id = chat_id;
    username = contents.callback_query.from.username;
  }else{
    text = contents.message.text;
    chat_id = contents.message.chat.id
    user_id = contents.message.from.id;
    username =  contents.message.from.username;
  }
  let result = new PostData(chat_id, user_id, text, username);
  return result;
}