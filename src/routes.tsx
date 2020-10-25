import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/Landing'

const Routes = () => {
    return (
  <BrowserRouter>
    <Route path="" exact component={Home}/>
  </BrowserRouter>
    )
}

export default Routes