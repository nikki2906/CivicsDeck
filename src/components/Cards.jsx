import { useState } from "react";
import "../App.css";
import CARD_DATA from "../assets/data.jsx";

function Cards() {
    // three state variables defined using the useState hook
    // keep track of the index of the current card being displayed.
    const [currCard, setCurrCard] = useState(0);
    // determine whether the card is flipped or not 
    const [isFlipped, toggleFlip] = useState(false);
    // keeps track of the previous card that was displayed.
    const [prevCard, setPrevCard] = useState(0);

    // extract the difficulty property from the card's data
    const difficulty = CARD_DATA[currCard].difficulty;

    let randomNum = 0;

    // use to generate a random card 
    const generateRandom = () => {
        // Generate a random number between 0 and the length of CARD_DATA array.
        // Math.random() generates a random decimal number between 0 and 1.
        // Multiplying it by CARD_DATA.length gives a number between 0 and the length of the array.
        // Math.floor() rounds down to the nearest whole number, ensuring the result is a valid array index.
        randomNum = Math.floor(Math.random() * CARD_DATA.length);
    
        // Check if the generated number is the same as the previous card's index.
        // If it is, generate a new random number.
        // This ensures that the same card is not shown twice in a row.
        while (randomNum === prevCard) {
            randomNum = Math.floor(Math.random() * CARD_DATA.length);
        }
    };
    

    // use to navigate to the next card
    const handleNext = () => {
        // make sure that the same card is not shown twice in a row
        generateRandom();
        // updates the prevCard state variable to hold the value of the current card before the card is changed
        setPrevCard(currCard);
        setCurrCard(randomNum);
        // if the current card is flipped, calls the toggleFlipDirection function, which flips the card back to its original state -> ensure that the new card will start in the unflipped state.
        if (isFlipped) {
            toggleFlip(!isFlipped);
        }
    }

    // use to navigate to the previous card
    const handlePrev = () => {
        // check if there is a previous card
        if (prevCard !== null) {
            // updates the currentCard state variable to the value of prevCard.
            setCurrCard(prevCard);
        }
        if (isFlipped) {
            toggleFlip(!isFlipped);
        }
    }

    // refresh the card
    const handleRefresh = () => {
        setCurrCard(0);
    }

    // use to flip the card: if isFlipped is false, the question side is shown; if isFlipped is true, the answer side is shown
    const toggleFlipDirection = () => {
        //  takes the current state is flipped and returns the opposite of flipped.
        toggleFlip((isFlipped) => !isFlipped);
        // if the current card is flipped, calls the toggleFlipDirection function, which flips the card back to its original state -> ensure that the new card will start in the unflipped state.
        if (isFlipped) {
            toggleFlipDirection();
        }
    };

    return(
        <>
            <div className="cards-wrapper">
                <h2>Card {currCard + 1}</h2>
                    <div className={`card-container ${difficulty}`} onClick={toggleFlipDirection}>
                    <h1>
                        {/* condition ? expressionIfTrue : expressionIfFalse */}
                        {/* display the question or the answer on the card based on whether the card is flipped or no */}
                        {/* if the card is not flipped, the question is displayed; if the card is flipped, the answer is displayed */}
                        {!isFlipped 
                        ? `${CARD_DATA[currCard].question}`
                        : `${CARD_DATA[currCard].answer}`
                        }
                    </h1>
                    
                </div>
                <div className="button-container">
                        <button onClick={handleRefresh} className="card-button"> &#8634; </button>

                        <button onClick={handlePrev} className="card-button"> ← </button>
                        
                        <button onClick={handleNext} className="card-button"> → </button>
                    </div>
            </div>
        </>
    );
}

export default Cards;