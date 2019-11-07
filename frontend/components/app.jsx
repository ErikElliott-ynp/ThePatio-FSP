import React from "react";
import NavBarContainer from "./nav/nav_bar_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupContainer from "../components/signup/signup_container"
import Profile from "./profile"
import NewsFeed from "./news_feed";

const App = () => {
    return (
        <div id="app">
            <NavBarContainer />
                <AuthRoute path="/login" component={SignupContainer} />       
                <AuthRoute path="/signup" component={SignupContainer} />       
            <Switch>
                <ProtectedRoute path="/users/:userId" component={Profile}/>
                <ProtectedRoute path="/feed" component={NewsFeed} />
                <Route path="/" component={SignupContainer} />
            </Switch>
            
        </div>
    )
}

export default App;