import React, { useState, useEffect } from "react";
import "./DeckDetailPage.css";
import axios from "axios";

const DeckDetailPage = (props) => {
  // TODO: Need to delete by dataset! From DB!

  const deckId = props.match.params.id;

  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8762/deck-handler/cards/${deckId}`)
      .then((res) => {
        setCards(res.data);
      });
  }, []);

  console.log(cards);

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
    console.log(currentCard);
    console.log(currentCard.dataset.id);

    axios
      .delete(
        `http://localhost:8762/deck-handler/card/${deckId}/${currentCard.dataset.id}`
      )
      .then((res) => {
        console.log(res.data);
      });
    currentCard.remove();
  };

  return (
    <div>
      <h2>Deck detail page</h2>
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
    </div>
  );
};

export default DeckDetailPage;
