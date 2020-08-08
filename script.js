const cript = document.getElementById('cript');

btnCript.addEventListener('click', function(event){
    event.preventDefault();
    const textValue = cript['textValue'].value; //получение значения из поля данных для шифрования
    if(textValue.length > 0){ 
            if(selectCript.value == 1) {
                function utf8_to_b64(str) {
                    return window.btoa(unescape(encodeURIComponent(str)));
                }     
                var value = utf8_to_b64(textValue);
                cript['textCript'].value = value;
            }else if(selectCript.value == 2) {
                var MD5=function(d){d=unescape(encodeURIComponent(d));result=M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};

                var result = MD5(textValue);
                cript['textCript'].value = result;
            }else if(selectCript.value == 3) {
                cript['textCript'].value = "функция в разработке";
            }else if(selectCript.value == 4) {
                cript['textCript'].value = "функция в разработке";
            }else if(selectCript.value == 5) {
                cript['textCript'].value = "функция в разработке";
            }else if(selectCript.value == 6) {
                cript['textCript'].value = "функция в разработке";
            }else if(selectCript.value == 7) {
                cript['textCript'].value = "функция в разработке";
            }else{
                alert('выберите способ шифрования');
            }
        }else{
            alert('Введите данные');
        }
});

btnEncript.addEventListener('click', function(event) {
    event.preventDefault();
    const textCript = cript['textCript'].value;

    var base64Rejex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
    var isBase64Valid = base64Rejex.test(textCript);

    if (textCript.length == 32) {
        console.log('It is MD5');
        cript['textEncript'].value = 'It is MD5';

    }else if(textCript.length == 40) {
        console.log('It is SHA1');
        cript['textEncript'].value = 'It is SHA1';

    }else if(textCript.length == 56) {
        console.log('It is SHA224');
        cript['textEncript'].value = 'It is SHA224';

    }else if(textCript.length == 64) {
        console.log('It is SHA256');
        cript['textEncript'].value = 'It is SHA256';

    }else if(textCript.length == 96) {
        console.log('It is SHA384');
        cript['textEncript'].value = 'It is SHA384';

    }else if(textCript.length == 128) {
        console.log('It is SHA512');
        cript['textEncript'].value = 'It is SHA512';

    }else if(isBase64Valid) {
        console.log('It is base64');
        function b64_to_utf8(str) {
            return decodeURIComponent(escape(window.atob(str)));
        }
        var value = b64_to_utf8(textCript);
        cript['textEncript'].value = "It is base64:  " + value;

    }else{
        console.log('It is not cript');
        cript['textEncript'].value = 'It is not Cript';
    }
});

//Валидация почты
function checkEmail(emailId) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)){
    alert("Вы ввели верный адрес");
    return true;
    }    
    return false;
    }
    function ValidateEmail(){
        var emailID=document.form.email;
        if ((emailID.value==null)||(emailID.value=="")){
            alert("Пожалуйста введите адрес")
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

// var base64Data = '0J/RgNC40LLQtdGC'; //Привет
// var base64Rejex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
// var isBase64Valid = base64Rejex.test(base64Data);
// if (isBase64Valid) {
//     console.log('It is base64');
// }else{
//     console.log('It is not base64');
// }

// var MD5Data = '8a669e9418750c81ab90ae159a8ec410' //Привет
// if (MD5Data.length == 32) {
//     console.log('It is MD5');
// }else{
//     console.log('It is not MD5');
// }

// var SHA1Data = '2805ae8e7e12f182135f92fb90843bb1080d3be8' //Привет
// if (SHA1Data.length == 40) {
//     console.log('It is SHA1');
// }else{
//     console.log('It is not SHA1');
// }

// var SHA224Data = '891cfb544eb6f3c212190705f7229d91db6cecd4718ea65e0fa1b112' //Привет
// if (SHA224Data.length == 56) {
//     console.log('It is SHA224');
// }else{
//     console.log('It is not SHA224');
// }

// var SHA256Data = 'dd679c0b9fd408a04148aa7d30c9df393f67b7227f65693fffe0ed6d0f0ade59' //Привет
// if (SHA256Data.length == 64) {
//     console.log('It is SHA256');
// }else{
//     console.log('It is not SHA256');
// }

// var SHA384Data = '0d83489095f455e4ef5186f2b071ab28e0d06132abc9050b683da28a463697ad1195ff77f050f20afbd3d5101df18c0d' //Привет
// if (SHA384Data.length == 96) {
//     console.log('It is SHA384');
// }else{
//     console.log('It is not SHA384');
// }

// var SHA512Data = '0f9f88ee4fa40d2135f98b839f601f227b4710f00c8bc48fde78ff3333bd17e41d80af9fe6fd68515a5f5f91e83e87de3c33f899661066b638db505c9cc0153d' //Привет
// if (SHA512Data.length == 128) {
//     console.log('It is SHA512');
// }else{
//     console.log('It is not SHA512');
// }