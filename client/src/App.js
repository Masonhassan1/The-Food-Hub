import React, { useState } from 'react';
import './App.css';
import { LinearProgress } from '@material-ui/core';
/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap'
import logo from './Logo.png'
/*Components*/
import SearchBar from './components/SearchBar'
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Receipe from './components/Receipe';
import MainScreen from './components/MainScreen';
import Profile from './components/Profile';
/*Auth*/
import { useAuth0 } from '@auth0/auth0-react';
/*Router*/
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
/*axios search*/
import axios from 'axios';


function App() {
  const [objReceipes, setObjReceipes] = useState('');
  const history = useHistory();
  const handleSubmit = info => {
    if (!isNaN(info)) history.push(`/receipe/${info}`)
    else {
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${info}`).then(res => {
        setObjReceipes(res.data.meals)
      })
    }
  }
  const { isLoading } = useAuth0();
  if (isLoading) return <div className="prog"><LinearProgress /></div>
  return (
    <div className="App">
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href="/"><img className="imgNav" src={logo} alt="The Food Hub" /></Navbar.Brand>
        <SearchBar onSubmit={handleSubmit} />
        <LoginButton /><LogoutButton />
      </Navbar>

      <Router>
        <Switch>
          <Route exact path="/" children={<MainScreen objReceipes={objReceipes} />} />
          <Route path="/receipe/:id" children={<Receipe />} />
          <Route path="/profile" children={<Profile />} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
