import React, {useEffect, useState} from 'react';
import "./GamePage.css"

const GamePage = () => {

  const [currentCard, setCurrentCard] = useState(
      {
        "id": 1,
        "question": "Budapest",
        "answer": "Hungary"
      }
  );

  console.log(currentCard);

  const markAsEasy = (event) => {
    // True
    event.preventDefault();
    console.log(event.target)
    console.log(event.target.dataset.id)
    setCurrentCard({
      "id": 3,
      "question": "London",
      "answer": "England"
    });
  };

  const markAsHard = (event) => {
    event.preventDefault();
    console.log(event.target)
    console.log(event.target.dataset.id)
    setCurrentCard({
      "id": 2,
      "question": "London",
      "answer": "England"
    });

  };

  const showAnswer = (event) => {
    event.preventDefault();
    let answer = document.querySelector(".game-answer")
    let selectBlock = document.querySelector(".game-button-select-container");
    if (event.target.classList.contains("game-button-container")) {
      event.target.style.display = "none";
      selectBlock.style.display = "flex";
    } else if (event.target.classList.contains("game-show-answer-button")) {
      event.target.parentElement.style.display = "none";
      selectBlock.style.display = "flex";
    }
    answer.style.display = "flex";
  };

  return (
      <div className="game-page">
        <h2>Game page</h2>

        <div className="game-container">
          <div className="current-card">
            <div className="game-picture-container">
              <img src={"/card_default.png"} alt="Default" className="game-image"/>
            </div>
            <div className="game-question">
              <p className="game-question-text">{currentCard.question}</p>
            </div>
            <div className="game-answer">
              <p className="game-answer-text">{currentCard.answer}</p>
            </div>
          </div>
          <div className="game-button-container" onClick={showAnswer}>
            <div className="game-show-answer-button">Show answer</div>
          </div>
          <div className="game-button-select-container">
              <div className="game-positive-button" data-id={currentCard.id} onClick={markAsEasy}>
                <div className="game-positive-button-text" data-id={currentCard.id}>Easy</div>
              </div>
              <div className="game-negative-button" data-id={currentCard.id} onClick={markAsHard}>
                <div className="game-negative-button-text" data-id={currentCard.id}>Hard</div>
              </div>
          </div>
        </div>
      </div>
  );
};

export default GamePage;
