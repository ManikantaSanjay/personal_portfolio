/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
document.getElementById("work1").onclick = function () {
        location.href = "https://github.com/ManikantaSanjay/indian_number_plate_character_recognition";
    };
    document.getElementById("work2").onclick = function () {
        location.href = "https://github.com/ManikantaSanjay/crop_yield_prediction_regression";
    };
    document.getElementById("work3").onclick = function () {
        location.href = "https://github.com/ManikantaSanjay/Emotion_Prediction_Kaggle_CNN";
    };
    document.getElementById("work4").onclick = function () {
        location.href = "https://github.com/ManikantaSanjay/Medical_Care_Management_System";
    };
    document.getElementById("work5").onclick = function () {
        location.href = "https://github.com/ManikantaSanjay/Electric_Billing_System";
    };
    document.getElementById("work6").onclick = function () {
        location.href = "https://github.com/ManikantaSanjay/patatap-mini-clone_javascript";
    };
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

function copyToClipboard() {
    const str = document.getElementById('contactno').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

// Existing scroll reveal animations...

function copyToClipboard() {
    const str = document.getElementById('contactno').innerText;
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

/*===== TIMELINE EXPAND/COLLAPSE FEATURE =====*/
var coll = document.getElementsByClassName("timeline-title");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
}








