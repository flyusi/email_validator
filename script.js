const cript = document.getElementById('cript');


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
        cript['textEncript'].value = 'It is base64';

    }else{
        console.log('It is not cript');
        cript['textEncript'].value = 'It is not Cript';
    }
});


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