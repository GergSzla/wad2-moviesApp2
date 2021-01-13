import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Profile } from "../pages/pages";
import LoginPage from "./signUp/loginPage";
import MoviesPage from "../pages/discMoviePage";
import ActorsPage from "../pages/actorsPage";
import SeriesPage from "../pages/seriesPage";
import HomePage from "../pages/homePage";

import SignUpPage from "./signUp/signUpPage";
import PriveRoute from "./signUp/privRoute";
import SiteHeader from "./siteHeader/index";
import MovieProvider from '../contexts/movieContext';
import ActorProvider from '../contexts/actorContext';
import SeriesProvider from '../contexts/seriesContext';
import AuthProvider from "../contexts/authContext";

const App = () => {
  return (
    <div className="page-temp">
      <BrowserRouter>
        <div className="page-template">
          <div className="container-fluid">
            <AuthProvider>
              <SiteHeader />
              <MovieProvider>
                <ActorProvider>
                  <SeriesProvider>
                    <Switch>
                      <Route path="/public" component={PublicPage} />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/signup" component={SignUpPage} />,
                    <Route exact path="/" component={HomePage} />
                      <PriveRoute path="/api/movies" component={MoviesPage} />
                      <PriveRoute path="/api/actors" component={ActorsPage} />
                      <PriveRoute path="/api/series" component={SeriesPage} />
                      <PriveRoute path="/profile" component={Profile} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </SeriesProvider>
                </ActorProvider>
              </MovieProvider>
            </AuthProvider>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
