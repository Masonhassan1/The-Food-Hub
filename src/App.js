import React, { useState } from 'react';
import './App.css';
/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
/*Components*/
import SearchBar from './components/SearchBar'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Recipie from './components/Recipie';
/*Auth*/
import { useAuth0 } from '@auth0/auth0-react';
/*Router*/
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
/*axios search*/
import axios from 'axios';
import MainScreen from './components/MainScreen';
import Profile from './components/Profile';

import logo from './Logo.png'

function App() {
  const [objRecipies, setObjRecipies] = useState('');
  const history = useHistory();
  const handleSubmit = info => {
    if (!isNaN(info)) history.push(`/recipie/${info}`)
    else {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info}`).then(res => {
        setObjRecipies(res.data.meals)
      })
    }
  }
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>
  return (
    <div className="App">
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href="/"><img className="imgNav" src={logo} alt="dfsd" /></Navbar.Brand>
        <SearchBar onSubmit={handleSubmit} />
        <LoginButton /><LogoutButton />
      </Navbar>

      <Router>
        <Switch>
          <Route exact path="/" children={<MainScreen objRecipies={objRecipies} />} />
          <Route path="/recipie/:id" children={<Recipie />} />
          <Route path="/profile" children={<Profile />} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
