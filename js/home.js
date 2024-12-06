const entrar = document.getElementById("entrar");

entrar.onclick = function(){redirect()};


const btnEntrar = document.getElementById("btn-entrar");

btnEntrar.onclick = function(){redirect()};

function redirect(){
   window.location.href = "index.html";
}