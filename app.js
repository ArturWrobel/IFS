const text = document.querySelector(".move")
const strText = text.textContent
const splitText = strText.split("")
text.textContent = ""

for (let i = 0; i < splitText.length; i++ ) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}

let char = 0
let timer = setInterval (onTick, 50)

function onTick () {
    const span = text.querySelectorAll ("span")[char]
    span.classList.add("fade")
    char++
    if (char === splitText.length){
        complete()
        return
    }
}

function complete() {
    clearInterval (timer)
    timer = null
}

//////// Pop up window "anonimowe zgłoszenie"

    $(".buttonn").on("click", function() {
    $(".popup").css("display", "flex");})

    $(".close").on("click", function(){
    $(".popup").css("display", "none");})

    $("#xx").on("click", function(){
    $(".popup").css("display", "none");})


////// Burger Menu //////

    const menuBtn = document.querySelector('.menu-btn');
    const hamburger = document.querySelector('.menu-btn__burger');
    const nav = document.querySelector('.nav');
    const menuNav = document.querySelector('.menu-nav');
    const tog = document.querySelectorAll('.menu-nav__link');
    const navItems = document.querySelectorAll('.menu-nav__item');
    const hide = document.querySelectorAll(".hide")
    
    let showMenu = false;
    
    menuBtn.addEventListener('click', toggleMenu);
    
    tog.forEach(function(x) {
      x.addEventListener("click", closeNav)
    }
    )

    //tog.addEventListener('click', closeNav);
    
    function toggleMenu() {
      if(!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        hide.forEach(item => item.classList.add("nic"));
    
        showMenu = true;
      } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        hide.forEach(item => item.classList.remove("nic"));
    
        showMenu = false;
      }
    }

    function closeNav() {
      if (!showMenu){
        showMenu = false;
        console.log("nic")
      }
      else
      {console.log("zamknij");
      hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        hide.forEach(item => item.classList.remove("nic"));
      }
    }

//////////////////////////    ALERTIFY     /////////////////////////

  /* $(function (){
    $(".run").click (function(event) {
        
        alertify.prompt( 'Procedura zgłaszania', 'Prosimy skorzystać z poniższego formularza:', 'Treść zgłoszenia'
               , function(evt, value) { alertify.success('You entered: ' + value) }
               , function() { alertify.error('Cancel') }).set('labels', {ok:'Wyślij', cancel:'Cancel'}).set('movable', true)      
})  
})
 */