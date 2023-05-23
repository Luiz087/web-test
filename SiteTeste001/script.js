const profileButton = document.querySelector('.profileButton')
const popupProfile = document.querySelector('.popup-wrapper')
const closePopup = document.querySelector('.wrapper')

profileButton.addEventListener('click', ()=> {
    popupProfile.style.display = 'block'
})

closePopup.addEventListener('click', event => {
    const classNameOfClickedElement = event.target.classList[0]
    console.log(classNameOfClickedElement)

    if(classNameOfClickedElement === 'popup-wrapper' || classNameOfClickedElement === 'closeProfilePopup'||  classNameOfClickedElement === 'btnSettings' || classNameOfClickedElement === 'wrapper' || classNameOfClickedElement === 'undefined') {
        popupProfile.style.display = 'none'
    }
    
})