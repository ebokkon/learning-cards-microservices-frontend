import React, { useState, useEffect } from "react";
import "./DeckDetailPage.css";
import axios from "axios";

const DeckDetailPage = () => {
  const getIdFromUrl = () =>{
    let urlFragments = window.location.href.split("/");
    return urlFragments[urlFragments.length - 1];
  }

  const deckId = getIdFromUrl();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8762/deck-handler/cards/${deckId}`)
      .then((res) => {
        setCards(res.data);
      });
  }, []);

  const showAnswer = (event) => {
    event.preventDefault();
    if (event.target.tagName === "P") {
      event.target.parentElement.style.display = "none";
      event.target.parentElement.nextElementSibling.style.display = "block";
    } else if (event.target.tagName === "DIV") {
      event.target.style.display = "none";
      event.target.nextSibling.style.display = "block";
    }
  };

  const removeCard = (event) => {
    event.preventDefault();
    let currentCard = event.target.parentElement.parentElement;

    axios
      .delete(
        `http://localhost:8762/deck-handler/card/${deckId}/${currentCard.dataset.id}`
      )
      .then((res) => {
        // TODO: Report card is successfully deleted or something.
        console.log(res.data);
      });
    currentCard.remove();
  };

  const backToMain = (event) => {
    event.preventDefault();
    window.location.href = "/";

  };

  const showCards = () => {
    if (cards.length === 0) {
      return <div className="empty-deck-text">This deck is empty!</div>;
    } else {
      return (
          <section className="deck-details-cards">
            {cards.map((card) => {
              return (
                  <div
                      key={card.id}
                      className="detail-card-element"
                      data-id={card.id}
                  >
                    <div className="card-image-container">
                      <img className="card-image" src={"/card_default.png"} alt="" />
                    </div>
                    <div className="card-question">
                      <p className="card-title-text">Question</p>
                      <p className="card-question-text">{card.question}</p>
                    </div>
                    <div className="card-answer">
                      <div className="show-answer-button" onClick={showAnswer}>
                        <p className="show-answer-text">Show answer</p>
                      </div>
                      <p className="card-answer-text">{card.answer}</p>
                    </div>
                    <div className="card-button-container">
                      <img
                          src={"/delete_button.png"}
                          alt="Delete card"
                          className="card-delete-button"
                          onClick={removeCard}
                      />
                    </div>
                  </div>
              );
            })}
          </section>
      );
    }
  };

  return (
    <div>
      <div className="back-button-deck" onClick={backToMain}>Back</div>
      <div className="decks-text">Cards in your deck:</div>
      {showCards()}
    </div>
  );
};

export default DeckDetailPage;
