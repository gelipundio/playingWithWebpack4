import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'
import logo from '../../images/platzi.png'
import video from '../../video/que-es-core.mp4'

function App() {
  const [loaderList, setLoaderList] = useState([])

  function handleClick() {
    setLoaderList(data.loaders)
  }

  return (
    <div>
      que linda app hecha en React.js
      <video src={video} width={360} controls poster={logo} />
      <p>
        <img src={logo} alt="logo" />
      </p>
      <button onClick={handleClick}>Mostrar lo aprendido</button>
      <ul>
        {
          loaderList.map(({name, id}) => <Loader name={name} key={id} />)
        }
      </ul>
    </div>
  )
}

export default App
