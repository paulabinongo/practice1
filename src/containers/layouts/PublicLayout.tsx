import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ProfilePage from '../pages/ProfilePage'
import Navbar from '../../components/Navbar';

function PublicLayout() {
  return (
   <Router>
     <Navbar />
       <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
   </Router>
   
  )
}

export default PublicLayout