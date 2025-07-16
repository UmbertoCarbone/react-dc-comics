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
import linkHeader from './assets/link';
import {
  dcComicsLinks,
  shopLinks,
  dcLinks,
  sitesLinks,
  linkBio,
} from "./assets/linkFooter"

function App() {


  return (
    <>
      <Header navbar={navbar} />

      <Main comics={comics} linkHeader={linkHeader} />

      <Footer
        dcComicsLinks={dcComicsLinks}
        shopLinks={shopLinks}
        dcLinks={dcLinks}
        sitesLinks={sitesLinks}
        linkBio={linkBio}
      />

    </>
  )
}

export default App
