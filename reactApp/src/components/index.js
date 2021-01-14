import React from "react";
import ReactDOM from "react-dom";
import "../app.css"
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import { PublicPage, Profile } from "../pages/pages";
import LoginPage from "./signUp/loginPage";
import MoviesPage from "../pages/discMoviePage";
// import MoviePage from '../pages/movieDetailsPage'
import ActorsPage from "../pages/actorsPage";
import SeriesPage from "../pages/seriesPage";
import HomePage from "../pages/homePage";
import UserProfPage from '../pages/userProfile'

import SignUpPage from "./signUp/signUpPage";
import PriveRoute from "./signUp/privRoute";
import SiteHeader from "./siteHeader/index";
import MovieProvider from '../contexts/movieContext';
import ActorProvider from '../contexts/actorContext';
import SeriesProvider from '../contexts/seriesContext';
import AuthProvider from "../contexts/authContext";

const App = () => {
  return (
      <BrowserRouter>
         <div className="jumbotron">
        <div className="container-fluid">
          <div className="page">
            <AuthProvider>
              <SiteHeader />
              <MovieProvider>
                <ActorProvider>
                  <SeriesProvider>
                    <Switch>
                      <Route path="/public" component={PublicPage} />
                      <Route path="/login" component={LoginPage} />
                      <Route path="/signup" component={SignUpPage} />
                      <Route exact path="/" component={HomePage} />
                      <PriveRoute path="/account" component={UserProfPage} />
                      <PriveRoute path="/api/movies" component={MoviesPage} />
                      <PriveRoute path="/api/actors" component={ActorsPage} />
                      <PriveRoute path="/api/series" component={SeriesPage} />
                      <PriveRoute path="/profile" component={Profile} />
                      {/* <PriveRoute path="/movies/:id" component={MoviePage} /> */}
                      <Redirect from="*" to="/" />
                    </Switch>
                  </SeriesProvider>
                </ActorProvider>
              </MovieProvider>
            </AuthProvider>
          </div>
          </div>
        </div>
      </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
