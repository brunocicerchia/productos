import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import NavbarClass from '../components/Navbar';
import NotFound from '../components/NotFound';
import ItemListContainer from '../components/itemList/itemListContainer'
import ItemDetailContainer from '../components/itemList/itemDetailContainer'

const Router = () => {
    return (
        <BrowserRouter>
            <NavbarClass />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/category/:categoryId" component={ItemListContainer} />
                <Route exact path="/producto/:productId" component={ItemDetailContainer} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;