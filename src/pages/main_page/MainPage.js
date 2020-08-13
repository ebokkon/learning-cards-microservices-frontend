import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Login from "../authentication_pages/Login";
import { Link } from "react-router-dom";
import axios from "axios";

const MainPage = () => {

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8762/deck-handler/decks").then((res) => {
      setDecks(res.data);
    });
  }, []);

  const deleteDeck = (event) => {
    event.preventDefault();
    let currentId = event.target.dataset.id;
    event.persist();
    axios
      .delete(`http://localhost:8762/deck-handler/deck/${currentId}`)
      .then((res) => {
        if (event.target.classList.contains("deck-button-text")) {
          event.target.parentElement.parentElement.parentElement.style.display =
            "none";
        } else {
          event.target.parentElement.parentElement.style.display = "none";
        }
      });
  };

    const startGame = (event) => {
        event.preventDefault();
        let currentDeckId = event.target.dataset.id;
        axios.post(`http://localhost:8762/game/play/${currentDeckId}`)
            .then(res => {
              if (res.data === true) {
                window.location.href = "/game";
              } else {
                alert("Something went wrong!")
              }
            }
        )
    };

  if (localStorage.getItem("username")) {
    return (
      <div>
        <h2>Main page</h2>
        <p>{`Welcome ${localStorage.getItem("username")}`}</p>
        <section className="deck-cards">
          {decks.map((deck) => {
            return (
              <div key={deck.id} className="deck-card-element">
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
                  <Link to="/game" className="play-link" data-id={deck.id} onClick={startGame}>
                    <div className="play-button" data-id={deck.id}>Study</div>
                  </Link>
                </div>
                <div className="deck-button-container">
                  <Link
                    to={`/deck/${deck.id}`}
                    className="decks-cards-button-link"
                  >
                    <div className="deck-button-text">Cards</div>
                  </Link>
                  <div
                    className="delete-deck-button"
                    data-id={deck.id}
                    onClick={deleteDeck}
                  >
                    <div className="deck-button-text" data-id={deck.id}>
                      Delete
                    </div>
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
