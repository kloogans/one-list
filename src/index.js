if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

// Select elements
const input = document.querySelector('input')
const list = document.querySelector('ul.list')
const button = document.querySelector('button')
const form = document.querySelector('form')

// Listen for button "click"
button.addEventListener('click', (event) => {
  // Prevent reload on submit
  event.preventDefault()
  // Get value from text input
  const listItem = input.value
  const li = document.createElement('li')
  li.setAttribute('class', 'animated fadeIn')
  // Put Input value into <li> tags
  li.textContent = listItem
  // Inject new <li> into list
  list.appendChild(li)
  let didDblClick = false
  // Delay single click action
  li.addEventListener('click', () => {
    setTimeout(() => {
      if (!didDblClick) {
        li.style.textDecoration = 'line-through'
        li.style.backgroundColor = 'rgba(51, 51, 51, 0.80)'
      }
    }, 300)
  })
  // Remove list item on double click
  li.addEventListener('dblclick', () => {
    didDblClick = true
    list.removeChild(li)
  })
  form.reset()
})

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
