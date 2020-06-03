import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Johto from './pages/Johto'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/johto' component={Johto} />
                {/* <Route path='/' exact component={Pokemons} /> */}
            </Switch>
        </BrowserRouter>
    )
}