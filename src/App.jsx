/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */
/* import "./index.css" */
import Header from './components/Header'
import Main from "./components/Main"
import Footer from './components/Footer'
import comics from "./assets/ComicCardHeader";
import navbar from './assets/navbarHeader';

function App() {


  return (
    <>
      <Header navbar={navbar}/>
     
      <Main comics={comics}  />
     
      <Footer />

    </>
  )
}

export default App
