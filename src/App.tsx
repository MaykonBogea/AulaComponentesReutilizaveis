import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './components/cabecalho'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <Card num={1}/>
      <Card num={2}/>
      <Card num={3}/>
    </>
  )
}

export default App
