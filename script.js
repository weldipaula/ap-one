let time = 4000
let currentImageIndex = 0
let images = document.querySelectorAll('#slider .product-container')
let dots = document.querySelector('#dots')
let max = images.length

function nextImage (){
  
  images[currentImageIndex].classList.remove('selected')

  currentImageIndex++

  if (currentImageIndex >= max) 
    currentImageIndex=0
  
  images[currentImageIndex].classList.add('selected')
}

function addDots () {
  for (i = max; i>0; i--) {
    
    div = '<div class="dots"></div>'

    dots.innerHTML = div + div
  }
 
}

function start () {

  addDots()
  setInterval(()=> {
    nextImage()
  }, time)
}

window.addEventListener('load', start)