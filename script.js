/**
 * ПЛАН:
 * 1. проверка синтаксиса с помощью регулярных выражений
 * 2. проверка доступности почтового сервера
 * 3. проверка самого ящика по SMTP (?)
 * 
 */


function checkEmail(email) {
    // Проверка синтаксиса согласно  http://tools.ietf.org/html/rfc3696#page-5
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailFormat)){
        alert("Формат адреса верный"); // можно будет убрать данное сообщение
        return true;
    }
    return false;
}
    

function checkMailServer(){
    // проверка почтового сервера DNS-запросом

}

function validateEmail(){
    var emailID = document.form.email;
    
    if (checkEmail(emailID.value) === true){
        // тогда проверяем доступность сервера
        if(checkMailServer() === true){
            // тогда проверяем наличие ящика
            if(checkRecipient() === true){
                alert("Указанный почтовый ящик существует");
            }else{
                alert("Указанного получателя нет на данном почтовом сервере")
            }
        }else{
            emailID.value=""
            alert("Указанный почтовый сервер недоступен");
            emailID.focus()
        }
    }else{
        // если синтаксис неверный - в дальнейших проверках нет смысла
        emailID.value=""
        alert("Формат адреса неверный");
        emailID.focus()
        // return false
    }
}