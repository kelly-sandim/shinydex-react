import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Johto from './pages/Johto';
import Hoenn from './pages/Hoenn';
import Sinnoh from './pages/Sinnoh';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/johto' component={Johto} />
                <Route path='/hoenn' component={Hoenn} />
                <Route path='/sinnoh' component={Sinnoh} />
            </Switch>
        </BrowserRouter>
    )
}