//Валидация почты
function checkEmail(emailId) {
    // let email = $(this).val();
  
    // if (email.length > 0
    // && (email.match(/.+?\@.+/g) || []).length !== 1) {
    //     console.log('invalid');
    //     alert('Вы ввели некорректный e-mail!');
    // } else {
    //     console.log('valid');
    //     alert('Вы ввели корректный e-mail!');
    // }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)){
    alert("Вы ввели верный адрес");
    return true;
    }    
    return false;
    }
    function ValidateEmail(){
        var emailID=document.form.email;
        if ((emailID.value==null)||(emailID.value=="")){
            alert("Пожалуйста, введите адрес")
            emailID.focus()
            return false
        }
        if (checkEmail(emailID.value)==false){
            emailID.value=""
            alert("Введенный адрес неверный");
            emailID.focus()
            return false
        }
            // alert('valid');
            // return true
     }