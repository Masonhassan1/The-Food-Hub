import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap'
import RandomMeal from './components/RandomMeal';

function App() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Recipies App</Navbar.Brand>

        <Form inline className="searchBar">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <LoginButton /><LogoutButton />
      </Navbar>
      <h2>Random Recipies:</h2>
      <div className="randomMeals">
        <RandomMeal />
        <RandomMeal />
        <RandomMeal />
      </div>
    </div>
  );
}

export default App;
