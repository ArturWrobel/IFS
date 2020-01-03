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

//////////////////////////    ALERTIFY     /////////////////////////

  /* $(function (){
    $(".run").click (function(event) {
        
        alertify.prompt( 'Procedura zgłaszania', 'Prosimy skorzystać z poniższego formularza:', 'Treść zgłoszenia'
               , function(evt, value) { alertify.success('You entered: ' + value) }
               , function() { alertify.error('Cancel') }).set('labels', {ok:'Wyślij', cancel:'Cancel'}).set('movable', true)      
})  
})
 */