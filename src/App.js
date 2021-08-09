// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import { increment, decrement } from "./redux/actions";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Grid from "./components/Grid";
import Item from "./components/Item";

import { shirtList, accessoriesList, pantsList } from "./constants/consts";

function App() {
  const newItemsList = shirtList
    .concat(accessoriesList, pantsList)
    .filter((item) => item.msg === "NEW");

  //   const counter = useSelector((state) => state.counter);
  //   const isLogged = useSelector((state) => state.isLogged);
  //   const dispatch = useDispatch();

  return (
    <Router>
      <div className="container-fluid p-0">
        <Nav />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Home />
              {/* <h1>Counter {counter}</h1> */}
              {/* <button onClick={() => dispatch(increment(5))}>+</button> */}
              {/* <button onClick={() => dispatch(decrement())}>-</button> */}

              {/* {isLogged ? <h3>Need to log in to see this info</h3> : ''} */}
            </>
          )}
        />
        <Route
          exact
          path="/new"
          render={(props) => (
            <>
              <Grid title="New Items!" items={newItemsList} />
            </>
          )}
        />
        <Route
          exact
          path="/shirts"
          render={(props) => (
            <>
              <Grid title="Shirts" items={shirtList} />
            </>
          )}
        />
        <Route
          exact
          path="/pants"
          render={(props) => (
            <>
              <Grid title="Pants" items={pantsList} />
            </>
          )}
        />
        <Route
          exact
          path="/accessories"
          render={(props) => (
            <>
              <Grid title="Accessories" items={accessoriesList} />
            </>
          )}
        />
        <Route
          path="/:item/:id"
          render={(props) => (
            <>
              <Item />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
