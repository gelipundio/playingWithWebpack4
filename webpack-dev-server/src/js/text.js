function text() {
  const saludo = "Hello world! from index"
  document.body.innerHTML = `<p>${saludo}</p>` 
}

if (module.hot) {
  module.hot.accept('./text.js', function () {
    console.log('recargado en caliente') 
    text()
  })
}

export default text
