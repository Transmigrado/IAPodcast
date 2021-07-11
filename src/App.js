
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Header from './Components/Header'
import Cover from './Components/Cover'
import AboutUsCover from './Components/AboutUsCover'
import TranscriptionPage from './Components/TranscriptionPage'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () =>  {

  const [menu, setMenu] = useState(0)
  return (
    <>
      <Header onMenu={menu => setMenu(menu)} />
      {menu === 0 && <Cover />}
      {menu === 0 &&  <Main />}
      {menu === 1 && <TranscriptionPage />}
      {menu === 2 && <AboutUsCover />}
    
     
      <Footer onMenu={menu => setMenu(menu)} />
    </>
  );
}

export default App
