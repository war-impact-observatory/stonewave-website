import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import './base.css'
import './legal.css'

document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear()
})
