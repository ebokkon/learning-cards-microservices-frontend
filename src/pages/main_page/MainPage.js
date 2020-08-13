import React, {useState} from 'react';
import "./MainPage.css"
import Login from "../authentication_pages/Login";
import {Link} from "react-router-dom";

const MainPage = () => {
    localStorage.setItem("username", "test user")
    //localStorage.clear();
    console.log(localStorage.getItem("username"));

    const [decks, setDecks] = useState([
        {"id": 1, "name": "animals", "description": "Test description, it is a longer text."},
        {"id": 2, "name": "capitals", "description": "Test description, it is a longer text."},
        {"id": 3, "name": "countries", "description": "Test description, it is a longer text."},
        {"id": 4, "name": "cars", "description": "Test description, it is a longer text."}
    ])
    console.log(decks);

    const startGame = (event) => {
        //event.preventDefault();
        let currentDeckId = event.target.dataset.id;
        console.log(event.target.dataset.id);
    };

    if (localStorage.getItem("username")) {
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
                                    <img src={"/deck.png"} className="deck-image" alt="Deck"/>
                                </div>
                                <div className="deck-play-button">
                                    <Link to="/game" className="play-link" data-id={deck.id} onClick={startGame}>
                                        <div className="play-button" data-id={deck.id}>Study</div>
                                    </Link>
                                </div>
                                <div className="deck-button-container">
                                    <Link to={`/deck/${deck["id"]}`} className="decks-cards-button-link">
                                        <div className="deck-button-text">Cards</div>
                                    </Link>
                                    <div className="delete-deck-button">
                                        <div className="deck-button-text">
                                            Delete
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                            ;
                    })}
                </section>
            </div>
        );
    } else {
        return (
            <Login/>
        );
    }

};

export default MainPage;
