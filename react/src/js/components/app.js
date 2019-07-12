import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      <ul>
        {
          loaderList.map(({name, id}) => <Loader name={name} key={id} />)
        }
      </ul>
      que linda app hecha en React.js

      <button onClick={handleClick}>Mostrar lo aprendido</button>
    </div>
  )
}

export default App
