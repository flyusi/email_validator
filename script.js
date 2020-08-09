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
        // alert("Формат адреса верный"); // можно будет убрать данное сообщение
        return true;
    }
    return false;
}
    

function checkMailServer(email){
    // проверка почтового сервера DNS-запросом на https://dns.google.com/
    var at = email.indexOf('@');
    var mailDomain = email.slice(at + 1);
    // отправить запрос, если есть нужный ответ, то сервер существует, и проверка пройдена
    var invocation = new XMLHttpRequest();
    var url = 'https://dns.google.com/resolve?name='+mailDomain+'&type=MX';

    fetch(url, {method: 'get'})
        .then((response) => {
            console.log(response);
            let ans = response.json();
            return ans;
        })
        .then((data) => {
            let a = data["Answer"];
            if (a !== undefined){
                console.log(a);
                return true;   
            }else{
                console.log('there is no a...')
                return false;
            }
        })
}

function checkRecipient(){
    // проверка существования адресата

}

function validateEmail(){
    var emailID = document.form.email;
    
    if (checkEmail(emailID.value) === true){
        // тогда проверяем доступность сервера
        if(checkMailServer(emailID.value) === true){
            // тогда проверяем наличие ящика
            // if(checkRecipient() === true){
            //     alert("Указанный почтовый ящик существует. Возможно.");
            // }else{
            //     alert("Указанного получателя нет на данном почтовом сервере.")
            // }
            alert("Указанный почтовый сервер доступен. Такой почтовый ящик существует. Возможно.");
            console.log('everything is OK')
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

