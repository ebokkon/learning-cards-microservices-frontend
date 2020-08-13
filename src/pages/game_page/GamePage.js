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
          <div className="game-button-container">
            <div className="game-show-answer-button">Show answer</div>
          </div>
          <div className="game-button-select-container">
              <div className="game-positive-button">
                <div className="game-positive-button-text">Easy</div>
              </div>
              <div className="game-negative-button">
                <div className="game-negative-button-text">Hard</div>
              </div>
          </div>
        </div>
      </div>
  );
};

export default GamePage;
