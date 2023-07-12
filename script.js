// alert("test");

// document.querySelector('h4').style.background="yellow";

const pointerSelector= document.querySelector('#btn-1');
console.log(pointerSelector);

//click event

//pointer un element avec queryS
const questionContainer= document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById("btn-2"); //plus précis de récup par id
const response= document.querySelector("p");

//bonne manière: loguer var pour gagner du temps au debbug
console.log(btn1, btn2);
console.log(questionContainer);
console.log(response);

//stylisé direct via js
questionContainer.style.borderRadius= "100px";

// ajouter element a notre element
questionContainer.addEventListener("click", ()=> {
    questionContainer.style.background="pink";
    questionContainer.style.border="3px solid black";
    console.log("Ton click test!");
});

//au dela d'un style on va mettre en place une classe et non plus ajouter tous nos styles a notre addEventL
//injecter une classe avec les propriétés voulues dans le css
questionContainer.addEventListener("click", ()=> {
    questionContainer.classList.add("question-clicked");
    console.log("test");
});

//ajouter et enlever classe si elle est mise avec toggle

questionContainer.addEventListener("click", ()=> {
    questionContainer.classList.toggle("question-clicked");
});

//faire apparaitre p qu'on a caché, une fois coché passe en visible

// btn1.addEventListener("click", ()=>{
//     response.style.visibility="visible";
//     response.style.background="red";

// });

// btn2.addEventListener("click", ()=> {
//     response.style.visibility="visible";
//     response.style.background="green";

// });

//apparaitre le p : version classe

btn1.addEventListener("click", ()=>{
    response.classList.add("show-response");
    response.style.background="red";

});

btn2.addEventListener("click", ()=> {
    response.classList.add("show-response");
    response.style.background="green";

});

//Mouse Events

const mousemove = document.querySelector('.mousemove'); 
console.log(mousemove);

//(e)  event : récupere TOUTES données de l'evenement
// window.addEventListener("mousemove", (e)=>{
//     console.log(e.target); //target sert a cibler un élement précis 
// });

//rond suit la sourie 
window.addEventListener('mousemove', (e)=>{
    mousemove.style.left = e.pageX + "px"; 
    mousemove.style.top = e.pageY + "px"; 
}); 

//ajuter event quand sourie est en bas 


