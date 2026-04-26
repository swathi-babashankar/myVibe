// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar.jsx';
import VideoDisplay from "./components/VideoDisplay.jsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
     {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
      <VideoDisplay/>
    </>
  )
}

export default App
