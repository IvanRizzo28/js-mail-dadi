'use strict';

const email=document.getElementById("email");
const verifica=document.getElementById("verifica");
const accesso=["prova@gmail.com","prova2@gmail.com","prova3@gmail.com"];

const check=document.getElementById("check");
const cross=document.getElementById("cross");

verifica.addEventListener("click", function(){
    const emailUtente=email.value;
    let tmp=false;
    for(let i=0;i<accesso.length;i++)
        if (emailUtente === accesso[i]) tmp=true;
    if (tmp) {
       check.classList.add("show");
       cross.classList.remove("show"); 
       console.log("Accesso consentito");
    }
    else{
        cross.classList.add("show");
        check.classList.remove("show"); 
        console.log("Non puoi accedere");
    }
});