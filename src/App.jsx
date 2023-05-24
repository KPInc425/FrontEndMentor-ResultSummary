import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResultSummary from './components/ResultSummary/ResultSummary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <ResultSummary />
      <div className="testing">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </>
  )
}

export default App
