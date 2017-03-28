if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

// One List
const input = document.querySelector('input')
const list = document.querySelector('ul.list')
// const enter = document.querySelector('input')
const button = document.querySelector('button')
const form = document.querySelector('form')

button.addEventListener('click', (event) => {
  event.preventDefault()
  const listItem = input.value
  const li = document.createElement('li')
  li.textContent = listItem
  list.appendChild(li)
  li.addEventListener('click', () => {
    li.style.textDecoration = 'line-through'
  })
  li.addEventListener('dblclick', () => {
    list.removeChild(li)
  })
  form.reset()
})

// IE9
if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
