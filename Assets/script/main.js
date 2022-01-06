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


/* ==============Accordition skills================ */

var skillsContent=document.getElementsByClassName("skills__content");
var skillsHeader=document.querySelectorAll('.skills__header')


function toggleSkills(){
        let itemclass=this.parentNode.className

        for(let i=0;i<skillsContent.length;i++){
                skillsContent[i].className='skills__content skills__close'
        }

        if(itemclass==='skills__content skills__close'){
                this.parentNode.className='skills__content skills__open'
        }
}

skillsHeader.forEach((el)=>{
        el.addEventListener('click',toggleSkills)
})