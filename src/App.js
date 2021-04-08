import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/LogIn/Login';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Invent from './Invent/Invent';
import BreakfastFoodDetail from './components/BreakFastFoodDetail/BreakfastFoodDetail';
import LunchFoodDetails from './components/LunchFoodDetails/LunchFoodDetails';
import DinnerFoodDetails from './components/DinnerFoodDetails/DinnerFoodDetails';
import CartShipment from './components/CartShipment/CartShipment';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/breakfastFoodDetails/:breakfastId">
            <BreakfastFoodDetail></BreakfastFoodDetail>
          </Route>
          <Route path="/lunchFoodDetails/:lunchId">
            <LunchFoodDetails></LunchFoodDetails>
          </Route>
          <Route path="/dinnerFoodDetails/:dinnerId">
            <DinnerFoodDetails></DinnerFoodDetails>
          </Route>
          <Route path="/cartShipment/:ctSpId">
            <CartShipment></CartShipment>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
