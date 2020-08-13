import React, {useEffect, useState} from 'react';
import "./GamePage.css"
import * as axios from "axios";

const GamePage = () => {

  const [currentCard, setCurrentCard] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8762/game/play`).then(response => {
      setCurrentCard(response.data);
      console.log(response);
    })

  }, [])

  console.log(currentCard);

  const markCard = (event, responseAnswer) => {
    axios
        .post(`http://localhost:8762/game/response/${responseAnswer}`)
        .then(response => {
          if (response.data !== "") {
            let answerContainer = document.querySelector(".game-answer");
            let buttonSelectContainer = document.querySelector(".game-button-select-container");
            let showAnswerContainer = document.querySelector(".game-button-container");
            showAnswerContainer.style.display = "flex";
            answerContainer.style.display = "none";
            buttonSelectContainer.style.display = "none";
            setCurrentCard(response.data);
          } else {
            alert("Empty");
          }
        });
  }

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
            <div className="game-positive-button" data-id={currentCard.id} onClick={(event) => {markCard(event, true)}}>
              <div className="game-positive-button-text" data-id={currentCard.id}>Easy</div>
            </div>
            <div className="game-negative-button" data-id={currentCard.id} onClick={(event) => {markCard(event, false)}}>
              <div className="game-negative-button-text" data-id={currentCard.id}>Hard</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GamePage;
