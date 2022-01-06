var navMenu = document.getElementById("nav-menu");
var navToggle = document.getElementById("nav-toggle");
var navClose = document.getElementById("nav-close");
var navClose = document.getElementById("nav-close")
//        show menu//

if (navToggle) {
        navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
        })
}

if(navClose){

        navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
        })
}

// Remove menu mobile//

var navLink=document.querySelectorAll('.nav__link')
// console.log('navLink:', navLink)

function linkAction(){
        const navMenu =document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
}
for(let i=0;i<navLink.length;i++){
        navLink[i].addEventListener('click',linkAction)
}
