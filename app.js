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

const slide = [
    {
        titolo: 'svezia',
        image: "immagini/01.jpg",
    },
    {
        titolo: 'Svizzera',
        image: "immagini/02.jpg",
    },
    {
        titolo: 'Gran Bretagna',
        image: "immagini/03.jpg",
    },
    {
        titolo: 'Germania',
        image: "immagini/04.jpg",
    },
    {
        titolo: 'Paradise',
        image: "immagini/05.jpg",
    },
]

const containerDiv = document.querySelector(".container")

let activeElement ;

let bottonedestra = document.querySelector(".bdes")

let bottonesinistra = document.querySelector(".bsin")

const slides = [];



for (let i = 0 ; i < slide.length ; i++){

    const { titolo, image } = slide[i]

    const divElement = document.createElement('div');

    divElement.classList.add('slider')

    const carta = `<h2>${ titolo }</h2><img src="${ immagine }">`

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

