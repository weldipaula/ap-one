//entrada de dados do formulario
const form = document.getElementById('form')

// pegando os campos que contem os valores
const input = {
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  phone: document.getElementById('phone'),
  msg: document.getElementById('msg'),
  authorization: document.getElementById('authorization'),

  //pegando somente os valores desses campos
  getValues() {
    return {
      name: input.name.value,
      email: input.email.value,
      phone: input.phone.value,
      msg: input.msg.value,
      authorization: input.authorization.value
    }
  }
}

//trocando o formulario pelo carregamento do loader e uma saudação
function loader() {
  setTimeout(() => {
    form.innerHTML = `
      <div class="loader-thanks">
        <span class="title">OBRIGADO POR SE INCREVER</span>
        <span class="title-color">${input.getValues().name.toUpperCase()}</span>
      </div>`
  }, 3000)

  form.innerHTML = `
    <div class='loader'>
      <img src="assets/house.gif" id='loader' alt="carregando">
    </div>`
}

//adicionando evento ao clicar no botao do formulario de leads
form.addEventListener('submit', event => {
  event.preventDefault()
  localStorage.setItem('lead', JSON.stringify(input.getValues()))
  loader()
})
