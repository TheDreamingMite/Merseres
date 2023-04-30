const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const menuList = document.querySelector('.menu-list')
//menu

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => {
    toggleMenu()
})

menuList.addEventListener('click', () => {
    toggleMenu()
    console.log('back');
})