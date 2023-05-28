//Popup
const profileButton = document.querySelector('.profileButton')
const popupProfile = document.querySelector('.popup-wrapper')
const wrapper = document.querySelector('.wrapper')
const fundopretopopup = document.querySelector('.fundopreto-popup')

profileButton.addEventListener('click', ()=> {
    popupProfile.style.display = 'block'
})

wrapper.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    if(classNameOfClickedElement === 'popup-wrapper' || classNameOfClickedElement === 'closeProfilePopup'||  classNameOfClickedElement === 'btnSettings' || classNameOfClickedElement === 'wrapper' || classNameOfClickedElement === 'undefined' || classNameOfClickedElement === 'fundopreto-popup') {
        popupProfile.style.display = 'none'
    }
    
})

//Carrossel
/*const sliders = document.querySelector('.slider')
const fundoslider = document.querySelector('.fundopreto-slider')
const botaoslider = document.querySelector('.manual-navigation')

sliders.addEventListener('mouseenter', sliderentrar)
sliders.addEventListener('mouseout', slidersair)

function sliderentrar(){
    fundoslider.style.display = 'block'
}

function slidersair(){
    fundoslider.style.display = 'none'
}*/

let count = 1
document.getElementById("radio1").checked = true

setInterval(function(){
    nextImage()
}, 5000)

function nextImage(){
    count++
    if(count>4){
        count=1
    }

    document.getElementById("radio"+count).checked = true

}

//Imagem inicial redirecionando para estoque
var mostra = document.querySelector('.mostrar')
var imginicial = document.querySelector('.img_inicial')

imginicial.addEventListener('mouseenter', entrar)
imginicial.addEventListener('mouseout', sair)
mostra.addEventListener('mouseenter', entra)
mostra.addEventListener('mouseout', sai)

function entrar() {
    mostra.style.display = 'block'
    imginicial.style.filter = 'brightness(50%)'
    imginicial.style.margin = '0'
    imginicial.style.width = '100%'
}
function sair(){
    mostra.style.display = 'none'
    imginicial.style.filter = 'brightness(100%)'
    imginicial.style.margin = '1%'
    imginicial.style.width = '98%'
}

function entra() {
    mostra.style.display = 'block'
    imginicial.style.filter = 'brightness(50%)'
    imginicial.style.margin = '0'
    imginicial.style.width = '100%'
    mostra.style.textDecoration = 'underline'
}
function sai() {
    mostra.style.display = 'none'
    imginicial.style.filter = 'brightness(100%)'
    imginicial.style.margin = '1%'
    imginicial.style.width = '98%'
    mostra.style.textDecoration = 'none'
    mostra.display.transition = '0.2s'
}