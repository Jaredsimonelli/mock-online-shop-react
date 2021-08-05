// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import { increment, decrement } from "./redux/actions";

import Nav from "./components/Nav";
import Accessories from "./components/Accessories";
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Grid from "./components/Grid";

import { shirtList, accessoriesList, pantsList } from "./constants/consts";

function App() {
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
              <Grid items={shirtList} />
              {/* <h1>Counter {counter}</h1> */}
              {/* <button onClick={() => dispatch(increment(5))}>+</button> */}
              {/* <button onClick={() => dispatch(decrement())}>-</button> */}

              {/* {isLogged ? <h3>Need to log in to see this info</h3> : ''} */}
            </>
          )}
        />
        <Route
          path="/shirts"
          render={(props) => (
            <>
              <Shirts items={shirtList} />
            </>
          )}
        />
        <Route
          path="/pants"
          render={(props) => (
            <>
              <Pants items={pantsList} />
            </>
          )}
        />
        <Route
          path="/accessories"
          render={(props) => (
            <>
              <Accessories items={accessoriesList} />
            </>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
