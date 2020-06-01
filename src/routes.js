import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Pokemons from './pages/Pokemons'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                {/* <Route path='/' exact component={Home} />
                <Route path='/pokemons' component={Pokemons} /> */}
                <Route path='/' exact component={Pokemons} />
            </Switch>
        </BrowserRouter>
    )
}