import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Grid from "./components/Grid";
import Item from "./components/Item";

import {
  getAllItems,
  getShirts,
  getPants,
  getAccessories,
} from "./redux/actions";

function App() {
  const store = useSelector((state) => state.store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllItems());
    dispatch(getShirts());
    dispatch(getPants());
    dispatch(getAccessories());
  }, []);

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
            </>
          )}
        />
        <Route
          exact
          path="/new"
          render={(props) => (
            <>
              <Grid
                title="New Items!"
                items={store.allItems.filter((item) => item.msg === "NEW")}
              />
            </>
          )}
        />
        <Route
          exact
          path="/shirts"
          render={(props) => (
            <>
              <Grid title="Shirts" items={store.shirts} />
            </>
          )}
        />
        <Route
          exact
          path="/pants"
          render={(props) => (
            <>
              <Grid title="Pants" items={store.pants} />
            </>
          )}
        />
        <Route
          exact
          path="/accessories"
          render={(props) => (
            <>
              <Grid title="Accessories" items={store.accessories} />
            </>
          )}
        />
        <Route
          path="/:itemType/:id"
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
