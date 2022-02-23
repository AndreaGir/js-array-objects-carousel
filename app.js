const immaginiCitta = [
    "immagini/01.jpg",
    "immagini/02.jpg",
    "immagini/03.jpg",
    "immagini/04.jpg",
    "immagini/05.jpg"
];

let titoliCitta = [
    "Svezia",
    "Svizzera",
    "Gran Bretagna",
    "Germania",
    "Paradise"
]

const containerDiv = document.querySelector(".container")

let activeElement ;

let bottonedestra = document.querySelector(".bdes")

let bottonesinistra = document.querySelector(".bsin")

const slides = [];



for (let i = 0 ; i < immaginiCitta.length ; i++){

    const divElement = document.createElement('div');

    divElement.classList.add('slide')

    const carta = `<h2>${titoliCitta[i]}</h2><img src="${immaginiCitta[i]}">`

    containerDiv.append(divElement)

    divElement.innerHTML = carta

    if (i == 0){
        divElement.classList.add("active")
        activeElement = 0

    } 

    slides.push(divElement)

}

console.log(slides)

bottonedestra.addEventListener("click", function(){
    
    const currentDiv = slides[activeElement]
    currentDiv.classList.remove("active")
    activeElement++
    const nextDiv = slides[activeElement]
    nextDiv.classList.add("active")
})
   
bottonesinistra.addEventListener("click", function(){
    
    const currentDiv = slides[activeElement]
    currentDiv.classList.remove("active")
    activeElement--
    const nextDiv = slides[activeElement]
    nextDiv.classList.add("active")
})

