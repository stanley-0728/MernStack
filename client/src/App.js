import React from 'react'
import {BrowserRouter as Router ,Route ,Switch } from 'react-router-dom'
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/DashBoard'
import ProtectedRoute from './Components/ProtectedRoute'
import Favourite from './Components/Favourite'
 const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/" component={Register}/>
        <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
        <ProtectedRoute exact path="/favourite" component={Favourite}/>
     </Switch>
   </Router>
  )
}

export default App
