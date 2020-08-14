import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Login from "./pages/authentication_pages/Login";
import Registration from "./pages/authentication_pages/Registration";
import Logout from "./pages/authentication_pages/Logout";
import MainPage from "./pages/main_page/MainPage";
import DeckDetailPage from "./pages/deck_detail_page/DeckDetailPage";
import GamePage from "./pages/game_page/GamePage";

function App() {
  return (
    <div className="App">
      <Router>
        {/* TODO: Need to implement a better header! */}
        <div className="header-style">
          <div className="header-text">
            Study Cards Application
          </div>
        </div>
        {/* TODO: Need to fix routes! */}
        <Route exact path="/" children={<MainPage />}></Route>
        <Route exact path="auth/register" children={<Registration />}></Route>
        <Route exact path="auth/login" children={<Login />}></Route>
        <Route exact path="/auth/logout" children={<Logout/>}/>
        <Route
          exact
          path="/deck/:id"
          component={DeckDetailPage}
          //children={<DeckDetailPage/>}
        ></Route>
        <Route exact path="/game" children={<GamePage />}></Route>
      </Router>
    </div>
  );
}

export default App;
