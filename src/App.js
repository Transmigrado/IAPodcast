import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import React from 'react'
import {Provider} from 'react-redux'
import Header from './Components/Header'
import Footer from './Components/Footer'

import AboutUsCover from './Pages/AboutUsCover'
import TranscriptionPage from './Pages/TranscriptionPage'
import Home from './Pages/Home'
import TranscriptionDetail from './Pages/TranscriptionDetail'
import NotFound from './Pages/NotFound'

import store from './Redux/store'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

const App = () =>  {

  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/transcription" component={TranscriptionPage} />
            <Route path="/transcriptionDetail/:transcriptionId" component={TranscriptionDetail} />
            <Route path="/about" component={AboutUsCover} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App
