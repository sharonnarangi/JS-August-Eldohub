const allImages = document.getElementsByClassName('item')
const nextBtn = document.getElementById('next')
const prevBtn = document.getElementById('prev')

console.log(allImages[2]);

let currentIndex = 0

nextBtn.addEventListener ('click', function(){
    currentIndex = currentIndex + 1
    if(currentIndex >= allImages.length){
        currentIndex = 0

    }
    for(let index = 0; index< allImages.length; index ++){
        if(allImages[index]. classList.contains('active')){
            allImages[index].classList.contains('active')
        }
    }
    allImages[currentIndex].classList.add('active')
}
)

prevBtn.addEventListener ('click', function(){
    currentIndex = currentIndex - 1
    if(currentIndex <= allImages.length){
        currentIndex = allImages.length = -1

    }
    for(let index = 0; index< allImages.length; index ++){
        if(allImages[index]. classList.contains('active')){
            allImages[index].classList.remove('active')
        }
    }
    allImages[currentIndex].classList.add('active')
}
)

//A function is a reuseable log of code

//How do I make images go to the next automatically?