// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import { increment, decrement } from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <Router>
            <div className='container'>
                <h1>Counter {counter}</h1>
                <button onClick={() => dispatch(increment(5))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>

                {isLogged ? <h3>Need to log in to see this info</h3> : '' }
                
            </div>
        </Router>
    );
}

export default App;
