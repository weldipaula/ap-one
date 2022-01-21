let painel = document.getElementById('dif-painel')
let integracao = document.getElementById('dif-integracao')
let loja = document.getElementById('dif-loja')
let menu1 = document.getElementById('menu1')
let menu2 = document.getElementById('menu2')
let menu3 = document.getElementById('menu3')
let sliderPlanos = document.querySelector('.planos-row')

function mouseClick(number) {
  if (number === 1) {
    integracao.style.display = 'none'
    loja.style.display = 'none'
    painel.style.display = 'flex'

    menu2.classList.remove('active-click', 'text-active-click')
    menu3.classList.remove('active-click', 'text-active-click')
    menu1.classList.add('active-click', 'text-active-click')
  } else if (number === 2) {
    integracao.style.display = 'flex'
    loja.style.display = 'none'
    painel.style.display = 'none'

    menu1.classList.remove('active-click', 'text-active-click')
    menu3.classList.remove('active-click', 'text-active-click')
    menu2.classList.add('active-click', 'text-active-click')
  } else if (number === 3) {
    integracao.style.display = 'none'
    painel.style.display = 'none'
    loja.style.display = 'flex'

    menu1.classList.remove('active-click', 'text-active-click')
    menu3.classList.add('active-click', 'text-active-click')
    menu2.classList.remove('active-click', 'text-active-click')
  }
}

function mouseOver(number) {
  if (number === 1) {
    let id = 'menu1'
    let menu = document.getElementById(id)
    menu.classList.toggle('active-border')
    menu.classList.toggle('text-active')
  } else if (number === 2) {
    let id = 'menu2'
    let menu = document.getElementById(id)
    menu.classList.toggle('active-border')
    menu.classList.toggle('text-active')
  } else if (number === 3) {
    let id = 'menu3'
    let menu = document.getElementById(id)
    menu.classList.toggle('active-border')
    menu.classList.toggle('text-active')
  }
}

function mouseOut(number) {
  if (number === 1) {
    let id = 'menu1'
    let menu = document.getElementById(id)
    menu.classList.toggle('active-border')
    menu.classList.toggle('text-active')
  } else if (number === 2) {
    let id = 'menu2'
    let menu = document.getElementById(id)
    menu.classList.toggle('active-border')
    menu.classList.toggle('text-active')
  } else if (number === 3) {
    let id = 'menu3'
    let menu = document.getElementById(id)
    menu.classList.toggle('active-border')
    menu.classList.toggle('text-active')
  }
}
window.onresize = function () {
  console.log(window.innerWidth)
  if (window.innerWidth < 911) {
    $('.planos-row').slick({
      dots: true,
      variableWidth: true,
      cssEase: 'ease-out',
      autoplay: true,
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  } else {
    // inserir no innerHtml o resultado final dos cards, para que eles se tranformen e retornem ao estado original
    sliderPlanos.classList.remove('slick-initialized')
    sliderPlanos.innerHTML = `
    <div class="planos">
              <p>100 EMISSÕES</p>
              <p>Desconto de 10%</p>
              <p>R$ 32,90<small>/mês</small></p>
              <small class="text-secondary">equivalente a R$394,76/ano</small>
              <ul>
                <li>01 CNPJ por plano</li>
                <li>100 notas fiscais/mês</li>
                <li>Armazenamento ilimitado</li>
                <li>R$ 0,24 por nota excedente</li>
                <li>Compatível com Certificado Digital A1</li>
              </ul>
              <div>
                <button>TESTE 30 DIAS GRÁTIS</button>
              </div>
            </div>
            <div class="planos">
              <p>200 EMISSÕES</p>
              <p>Desconto de 10%</p>
              <p>R$ 32,90<small>/mês</small></p>
              <small class="text-secondary">equivalente a R$394,76/ano</small>
              <ul>
                <li>01 CNPJ por plano</li>
                <li>100 notas fiscais/mês</li>
                <li>Armazenamento ilimitado</li>
                <li>R$ 0,24 por nota excedente</li>
                <li>Compatível com Certificado Digital A1</li>
              </ul>
              <div>
                <button>TESTE 30 DIAS GRÁTIS</button>
              </div>
            </div>
            <div class="planos">
              <p>300 EMISSÕES</p>
              <p>Desconto de 10%</p>
              <p>R$ 32,90<small>/mês</small></p>
              <small class="text-secondary">equivalente a R$394,76/ano</small>
              <ul>
                <li>01 CNPJ por plano</li>
                <li>100 notas fiscais/mês</li>
                <li>Armazenamento ilimitado</li>
                <li>R$ 0,24 por nota excedente</li>
                <li>Compatível com Certificado Digital A1</li>
              </ul>
              <div>
                <button>TESTE 30 DIAS GRÁTIS</button>
              </div>
            </div>`
  }
}
// slider dos planos
