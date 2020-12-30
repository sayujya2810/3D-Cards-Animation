//Animation to happen

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//item
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneakers img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');


//moving animation Event

container.addEventListener('mousemove',(e) =>{

    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
}   
);

//Animate When Mouse in
container.addEventListener('mouseenter', (e)=> {
    card.style.transition = "all 0.15s ease";

    //poput
    title.style.transform = 'translatez(150px)';
    sneaker.style.transform = 'translatez(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translatez(125px)';
    description.style.transform = 'translatez(75px)';
    sizes.style.transform = 'translatez(100px)';
});


// Animate When Mouse Out
container.addEventListener('mouseleave',(e)=>{
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateY(0deg)`;
    title.style.transform = 'translatez(0px)';
    sneaker.style.transform = 'translatez(0px)';
    purchase.style.transform = 'translatez(0px)';
    description.style.transform = 'translatez(0px)';
    sizes.style.transform = 'translatez(0px)';
});

