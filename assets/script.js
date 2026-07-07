// ========================================
// Smooth Scroll
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});

// ========================================
// Navbar Shadow
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});

// ========================================
// Scroll Reveal Animation
// ========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

document.querySelectorAll(

".skill-card,.project-card,.stat,.timeline-item,.contact-card"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

// ========================================
// Typing Effect
// ========================================

const titles=[

"Software Engineer",

"Machine Learning Engineer",

"Backend Developer",

"AI Enthusiast"

];

const hero=document.querySelector(".hero-left h5");

let titleIndex=0;

let charIndex=0;

let deleting=false;

function typeEffect(){

    if(!hero) return;

    const current=titles[titleIndex];

    if(!deleting){

        hero.textContent=current.substring(0,charIndex++);

        if(charIndex>current.length){

            deleting=true;

            setTimeout(typeEffect,1800);

            return;

        }

    }

    else{

        hero.textContent=current.substring(0,charIndex--);

        if(charIndex<0){

            deleting=false;

            titleIndex=(titleIndex+1)%titles.length;

        }

    }

    setTimeout(typeEffect,deleting?45:90);

}

typeEffect();

// ========================================
// Counter Animation
// ========================================

const counters=document.querySelectorAll(".stat h2");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

let counter=entry.target;

let target=counter.innerText;

let numeric=parseInt(target);

if(isNaN(numeric)) return;

let current=0;

let step=Math.ceil(numeric/60);

let interval=setInterval(()=>{

current+=step;

if(current>=numeric){

counter.innerText=target;

clearInterval(interval);

}else{

counter.innerText=current+"+";

}

},20);

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

// ========================================
// Active Navigation
// ========================================

const current=window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

const href=link.getAttribute("href");

if(href===current){

link.style.color="#60A5FA";

}

});

// ========================================
// Mouse Glow
// ========================================

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth*100;

const y=e.clientY/window.innerHeight*100;

document.body.style.background=

`radial-gradient(circle at ${x}% ${y}%,
rgba(59,130,246,.08),
#0F172A 45%)`;

});
