const btnInsert = document.querySelector('.btn-inserir')
const btnLimpar = document.querySelector('.btn-limpar')

const product = document.querySelector('.name')
const price = document.querySelector('.value-pro')
const data = document.querySelector('.value-data')

var nameProduct = document.querySelector('.product')
const namePrice = document.querySelector('.value')
const nameDate = document.querySelector('.data')

const listProduct = [{
  namePro: '',
  namePri: '',
  nameDat: ''
}
]

btnInsert.addEventListener('click', () => {
  insertLocalStorage()
  
  setTimeout(() => {
    insertProduct()
    insertPrice()
    insertDate()
    valorTotal()
  }, 2000)

})

/* Inserindo no localStorage */
function insertLocalStorage() {
  listProduct.push({
    namePro: nameProduct.value,
    namePri: namePrice.value,
    nameDat: nameDate.value
  })
  localStorage.setItem('list', JSON.stringify(listProduct))
}
/* Inserindo Produto */
function insertProduct() {
  const searshLocalStore = JSON.parse(localStorage.getItem('list'))

  searshLocalStore.map(index => {
    if (index.namePro != '') {
      var li = document.createElement('li')
      li.innerHTML = index.namePro
      product.appendChild(li)
    }
  })
}
/* Inserindo price */
function insertPrice() {
  const searshLocalStore = JSON.parse(localStorage.getItem('list'))

  searshLocalStore.map(index => {
    if (index.namePri != '') {
      var li = document.createElement('li')
      li.innerHTML = index.namePri
      price.appendChild(li)
    }
  })
}
/* Inserindo date */
function insertDate() {
  const searshLocalStore = JSON.parse(localStorage.getItem('list'))

  searshLocalStore.map(index => {
    if (index.nameDat != '') {
      var li = document.createElement('li')
      li.innerHTML = index.nameDat
      data.appendChild(li)
    }
  })
}

function valorTotal() {
  let soma = 0
  priceTotal = []
  const searshLocalStore = JSON.parse(localStorage.getItem('list'))

  searshLocalStore.map(index => {
    if (index.namePri != '') {
      soma += parseFloat(index.namePri)
    }
  })
  document.querySelector('.all-value').innerHTML = soma
}

function upDate() {
  insertProduct()
  insertPrice()
  insertDate()
  valorTotal()
}

btnLimpar.addEventListener('click', ()=>{
  localStorage.clear()
})

upDate()

