import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";

import LandingPage from './components/Landing'
import PricingPage from './components/Pricing'


export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/pricing' component={PricingPage} />
                        <Route path='/' component={LandingPage}/>
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}