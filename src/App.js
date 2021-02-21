
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Header from './Components/Header'
import Cover from './Components/Cover'
import AboutUsCover from './Components/AboutUsCover'
import Main from './Components/Main'
import Footer from './Components/Footer'

const App = () =>  {

  const [menu, setMenu] = useState(0)
  return (
    <>
      <Header onMenu={menu => setMenu(menu)} />
      {menu === 0 && <Cover />}
      {menu === 1 && <AboutUsCover />}
      {menu === 0 &&  <Main />}
     
      <Footer onMenu={menu => setMenu(menu)} />
    </>
  );
}

export default App
