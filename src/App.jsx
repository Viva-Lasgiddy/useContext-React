import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CompB from './components/ComponentB'


export const nameContext = createContext()


function App() {
  const [name, setName] = useState("Gideon")

  return (
    <>
      <div className='box'>
        <h1>Component A</h1>
        <h2>Hello {name}</h2>
        
        <nameContext.Provider value={name}>
            <CompB />
        </nameContext.Provider>
        
      </div>
    </>
  )
}

export default App
