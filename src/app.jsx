import "./app.css";
import { useState } from "react";

const img1 = "/assets/img1.jpg";
const img2 = "/assets/img2.jpg";
const img3 = "/assets/img3.jpg";
const img4 = "/assets/img4.jpg";

const cover = "/assets/cover.jpg";

const allCards = [{ src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }];

function App() {
  const [curCards, setCurCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const shuffleCards = () => {
    //double each card
    const doubledAndMixedCards = [...allCards, ...allCards]
      //randomize the order with "sort"
      .sort(() => Math.random() - 0.5)
      //index randomly each card
      .map((card) => ({ ...card, id: Math.random() }));

    //add doubled and mixed and indexed cards into current array for the game
    setCurCards(doubledAndMixedCards);

    //start with 0 moves made
    setMoves(0);
  };
  //
  const handleClick = (card) => {};

  return (
    <div>
      <h1>Memory Game</h1>
      <div className="cards-container">
        {curCards.map((card) => (
          <div className="" key={card.id}>
            <div>
              <img className="" src={card.src} alt="card front"></img>
            </div>
            <img
              className=""
              src={cover}
              onClick={handleClick}
              alt="card cover"
            ></img>
          </div>
        ))}
      </div>
      Moves made: {moves}
      <button onClick={shuffleCards}>Start over </button>
    </div>
  );
}

export default App;
