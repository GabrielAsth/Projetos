/*constantes*/
const btnMobile = document.getElementById("btn-mobile");
const lupa = document.getElementById("lupa");
const search = document.getElementById("search");
const fechar = document.getElementById("fechar");
const logo = document.getElementById("logo");
const avatar = document.getElementById("avatar");
const logOut = document.getElementById("logOut");


/*funções*/

/*exibir menu*/
function exibirMenu(event) {

   if(event.type === 'touchstart') {event.preventDefault()};

   const nav = document.getElementById('nav');
   nav.classList.toggle('active');

   const icon = document.getElementById('icon-menu');
   icon.classList.toggle('rotate');
}


/*exibir pesquisa*/
function exibirPesquisa(){

   if (window.innerWidth > 660){

      search.classList.toggle('open');

      if(search.classList.contains('open')){
         lupa.style.left = "10px";
         fechar.style.fontSize = "20px";
      }
      else{
         lupa.style.left = "-20px";
         fechar.style.fontSize = "0";
         limparPesquisa();
      }
   }
}


/*limpar pesquisa*/
function limparPesquisa(){
   search.value = "";
}

/*redirecionar*/
function redirect() {
   window.location.href = "home.html";
}


/*exibir avatar*/
function exibirAvatar(event) {

   if(event.type === 'touchstart') {event.preventDefault()};

   const menu = document.getElementById('menu');
   menu.classList.toggle('active');
}


/*chamadas de funções*/

/*exibir menu*/
if (btnMobile) {
    btnMobile.addEventListener('click', exibirMenu);
    btnMobile.addEventListener('touchstart', exibirMenu);
}

/*exibir pesquisa*/
if (lupa) {
    lupa.addEventListener('click', exibirPesquisa);
}

/*limpar pesquisa*/
if (fechar) {
    fechar.addEventListener('click', limparPesquisa);
}

/*scroll function*/
window.onscroll = function() {scrollFunction()};

/*redirecionar*/
if (logo) {
    logo.addEventListener('click', redirect);
}

if (logOut) {
    logOut.addEventListener('click', redirect);
}

/*exibir avatar*/
if (avatar) {
    avatar.addEventListener('click', exibirAvatar);
    avatar.addEventListener('touchstart', exibirAvatar);
}