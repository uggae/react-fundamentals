export function myFunction() {
  const rootDiv = document.createElement('div')
  rootDiv.textContent = 'Hola mi mundo'
  rootDiv.id = 'root'
  document.body.append(rootDiv)
  const myDiv = document.createElement('div')
  myDiv.textContent = 'Hello World'
  myDiv.className = 'container'
  document.getElementById('root').append(myDiv)
}
