import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Login from "../authentication_pages/Login";
import { Link } from "react-router-dom";
import axios from "axios";

const MainPage = () => {
  localStorage.setItem("username", "test user");
  localStorage.setItem("id", 1);
  //localStorage.clear();
  console.log(localStorage.getItem("username"));

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8762/deck-handler/decks").then((res) => {
      setDecks(res.data);
    });
  }, []);

  function DeleteDeck() {
    //TODO connect with id
    axios
      .delete(`http://localhost:8762/deck-handler/deck/${id}`)
      .then((res) => {
        console.log(res.data);
      });
  }

  console.log(decks);

  if (decks) {
    return (
      <div>
        <h2>Main page</h2>
        <p>{`Welcome ${localStorage.getItem("username")}`}</p>
        <section className="deck-cards">
          {decks.map((deck) => {
            return (
              <div className="deck-card-element">
                <div className="deck-title">
                  <p className="deck-text">{deck.name}</p>
                </div>
                <div className="deck-description">
                  <p className="deck-text">{deck.description}</p>
                </div>
                <div className="deck-image-container">
                  <img src={"/deck.png"} className="deck-image" alt="Deck" />
                </div>
                <div className="deck-play-button">
                  <Link to="/game" className="play-link">
                    <div className="play-button">Study</div>
                  </Link>
                </div>
                <div className="deck-button-container">
                  <Link
                    to={`/deck/${deck["id"]}`}
                    className="decks-cards-button-link"
                  >
                    <div className="deck-button-text">Cards</div>
                  </Link>
                  <div className="delete-deck-button" onClick={DeleteDeck}>
                    <div className="deck-button-text">Delete</div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default MainPage;
