let clickButton = document.querySelector('.button2')

clickButton.addEventListener('click',function(){

    document.querySelector('.popup').style.display = 'flex'
})



let closeButton = document.querySelector('.close-button')

closeButton.addEventListener('click',function(){

    document.querySelector('.popup').style.display = 'none'
})