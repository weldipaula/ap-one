let time = 4000
let currentImageIndex = 0
let images = document.querySelectorAll('#slider .product-container')
let dots = document.querySelector('#dots')
let max = images.length

window.addEventListener('scroll',(event) => {
  let btn = document.getElementById('btn-sticky')
  let header = document.querySelector('#header-sticky')

  if (document.documentElement.scrollTop < 20) {
    header.classList.remove('sticky')
    header.classList.add('no-sticky')
    btn.classList.add('btn-color')
  }  if (document.documentElement.scrollTop > 20) {
    header.classList.add('sticky')
    header.classList.remove('no-sticky')
    btn.classList.remove('btn-color')
  }
});

function nextImage (){
  
  images[currentImageIndex].classList.remove('selected')

  currentImageIndex++

  if (currentImageIndex >= max) 
    currentImageIndex=0
  
  images[currentImageIndex].classList.add('selected')
}

function addDots () {
    if (max === 0) {
     dots.innerHTML = ''
  } else if (max === 1) {
    dots.innerHTML = '<div class="dots"></div>'
  } else if (max === 2) {
    dots.innerHTML = '<div class="dots"></div><div class="dots"></div>'
  } else if (max === 3) {
    dots.innerHTML = '<div class="dots"></div><div class="dots"></div><div class="dots"></div>'
  }
}

function start () {

  addDots()
  setInterval(()=> {
    nextImage()
  }, time)
}

window.addEventListener('load', start)