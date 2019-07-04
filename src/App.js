import React from 'react';
import './App.css';
/*Bootstrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
/*Components*/
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import RandomMeal from './components/RandomMeal';
import Recipie from './components/Recipie';
/*Auth*/
import { useAuth0 } from '@auth0/auth0-react';
/*Router*/
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="App">
      <Navbar className="color-nav" variant="light">
        <Navbar.Brand href="#home">Recipies App</Navbar.Brand>

        <Form inline className="searchBar">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button style={{ color: "white", background: "rgb(65, 65, 65)" }} className='button' variant="default">Search</Button>
        </Form>
        <LoginButton /><LogoutButton />
      </Navbar>

      <Router>
        <Switch>
          <Route exact path="/" children={<div className="randomMeals">
            <RandomMeal />
            <RandomMeal />
            <RandomMeal />
          </div>} />
          <Route path="/recipie/:id" children={<Recipie />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
