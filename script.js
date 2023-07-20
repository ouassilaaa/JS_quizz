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
//-----------------------------------------------------------------------------------------------
//Mouse Events

const mousemove = document.querySelector('.mousemove'); 
console.log(mousemove);

// //(e)  event : récupere TOUTES données de l'evenement
// // window.addEventListener("mousemove", (e)=>{
// //     console.log(e.target); //target sert a cibler un élement précis 
// // });

//rond suit la sourie 
// document.addEventListener('mousemove', (e)=>{
//     mousemove.style.left = e.pageX + "px"; 
//     mousemove.style.top = e.pageY + "px"; 
// }); 

// //ajouter event   
questionContainer.addEventListener("mouseout", ()=>{
    questionContainer.style.background="pink"; 
});


//-----------------------------------------------------------------------------------------------
//KeyPress event

const keyPressContainer=document.querySelector(".keypress"); 
const key = document.getElementById("key"); 
console.log(key); 

//on écoute les touches du clavier
// document.addEventListener("keypress", ()=>{
//     console.log("keypress ok!"); 
// }); 

//savoir la toucher appuyer
document.addEventListener("keypress", (e)=>{
    //afficher temps reel de manière dynamique
    key.textContent=e.key;
    console.log(e.key); 

    if(e.key==="a"){
        keyPressContainer.style.background="blue"; 
    } else if(e.key==="b"){
        keyPressContainer.style.background="green";
    } else{
        keyPressContainer.style.background="pink"; 
    }
}); 

//-----------------------------------------------
//Scroll Event

const nav = document.querySelector("nav"); 
console.log(nav); 

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY); 

    if(window.scrollY>120){
        nav.style.top=0;
    } else{
        nav.style.top="-50px"; 
    }
}); 


//-----------------------------------------------------------------------------------------------
//Form Event

const inputName=document.querySelector('input[type="text"]'); 
const select =document.querySelector("select"); 
const form =document.querySelector("form"); 

//stocker ce que l'ont entre a event
let pseudo=""; 
let language=""; 
//recuperer data accoler a cet evenement
inputName.addEventListener("input",(e)=>{
    // console.log(e.target.value);
    pseudo=e.target.value; 
});

select.addEventListener("input", (e)=>{
    // console.log(e.target.value);
    language=e.target.value;  
});

//event sur la validation form 
form.addEventListener("submit", (e)=>{
    e.preventDefault(); //methode qui annule le changement de page
    if(cgv.checked){
        //on recupere la div enfant sans passer par une const
        //innerHTML permet d'injecter balises html
        document.querySelector("form>div").innerHTML = `
        <h3>Pseudo: ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4> `;

    } else {
        //si cgv non accepte
        alert('Veuillez accepter les CGV')
    }
}); 

//-----------------------------------------------------------------------------------------------
//ForEach : appliquer une logique sur plusieurs elements au meme nom a la fois

const boxes=document.querySelectorAll(".box"); 
console.log(boxes); 

boxes.forEach((box) =>{
    box.addEventListener("click", (e)=>{
        e.target.style.transform="scale(0.9)"; 
    });
});

//-----------------------------------------------------------------------------------
//Stop propagation : arrêter un event particulier: utile si on veut éviter qu'un event en écrase un autre 
questionContainer.addEventListener("click",(e)=>{
    alert('Test:)'); 
    e.stopPropagation();
});

//----------------------------------------------------------------------------------------
//possibilité de retirer un event avec methode removeEventListener

//-----------------------------------------------------------------------------------------
//BOM

//-----------------------------------------------------------------------------------------
//SetProprety méthode définit une nouvelle valeur pour une propriété sur un objet de déclaration de style CSS

window.addEventListener('mousemove', (e)=>{
    console.log(e); 
    nav.style.setProperty("--x", e.layerX+"px");
    nav.style.setProperty("--y", e.layerY+"px");
})