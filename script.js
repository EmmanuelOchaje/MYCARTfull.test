 AOS.init();

let div = document.querySelector(".hideshow")
function hideShow(){
    div.classList.toggle('hide');
}

let div1 = document.querySelector(".hideshow1");
function hideShow1(){
    div1.classList.toggle('hide1');
}

let div2 = document.querySelector(".hideshow2");
function hideShow2(){
    div2.classList.toggle('hide2');
}

let div3 = document.querySelector(".hideshow3");
function hideShow3(){
    div3.classList.toggle('hide3');
}


const activePage = window.location.pathname;
console.log(activePage);
const navLinks = document.querySelectorAll("nav a").
forEach(link => {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }    
});