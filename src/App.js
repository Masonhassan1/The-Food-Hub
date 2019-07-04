import React, { useState } from 'react';
import './App.css';
/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import logo from './Logo.png'
/*Components*/
import SearchBar from './components/Header/SearchBar'
import LoginButton from './components//Header/LoginButton';
import LogoutButton from './components/Header/LogoutButton';
import Recipie from './components//Recipie/Recipie';
import MainScreen from './components//Main/MainScreen';
import Profile from './components/Profile/Profile';
/*Auth*/
import { useAuth0 } from '@auth0/auth0-react';
/*Router*/
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
/*axios search*/
import axios from 'axios';


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
