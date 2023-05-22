const profileButton = document.querySelector('.profileButton')
const popupProfile = document.querySelector('.popup-wrapper')
const closeButtonPopup2 = document.querySelector('.wrapper')

profileButton.addEventListener('click', ()=> {
    popupProfile.style.display = 'block'
})

closeButtonPopup2.addEventListener('click', event => {
    const ClassNameOfClickedElement = event.target.classList[0]
    if(ClassNameOfClickedElement === popup)
    console.log(ClassNameOfClickedElement)
    //popupProfile.style.display = 'none'
})