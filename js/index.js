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


/*scroll function*/
function scrollFunction() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
     document.getElementById("header").style.background = "#141414";
   } else {
     document.getElementById("header").style.background = "transparent";
   }
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
btnMobile.addEventListener('click', exibirMenu);
btnMobile.addEventListener('touchstart', exibirMenu);

/*exibir pesquisa*/
lupa.addEventListener('click', exibirPesquisa);

/*limpar pesquisa*/
fechar.addEventListener('click', limparPesquisa);

/*scroll function*/
window.onscroll = function() {scrollFunction()};

/*redirecionar*/
logo.addEventListener('click', redirect);
logOut.addEventListener('click', redirect);

/*exibir avatar*/
avatar.addEventListener('click', exibirAvatar);
avatar.addEventListener('touchstart', exibirAvatar);