import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Front end</h1>
      <div className="card">
        <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aspernatur repudiandae incidunt tempora, est cupiditate veritatis facere optio voluptatibus necessitatibus rem. Atque consequatur adipisci in maiores alias fugiat. Quaerat velit tempore aliquam fugit porro nisi ratione voluptatem, quod aperiam explicabo! Velit neque dolorem aliquam, quasi perferendis sed quod quis necessitatibus?
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
