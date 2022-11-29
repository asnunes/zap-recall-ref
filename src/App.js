import { useState } from "react";
import styled from "styled-components";

import { Footer, Logo, Flashcards } from "./components";
import { DECK, CARD_STATUS } from "./constants";

export default function App() {
  const [cards, setCards] = useState(() => {
    const cardCopy = [...DECK];
    const shuffledCards = cardCopy.sort(() => Math.random() - 0.5);
    return shuffledCards
      .slice(0, 4)
      .map((card) => ({ ...card, status: CARD_STATUS.CLOSED }));
  }, []);

  function onCardStatusChange(card, status) {
    const newCards = cards.map((c) => {
      if (c.id === card.id) {
        return { ...c, status };
      }
      return c;
    });
    setCards(newCards);
  }

  return (
    <ScreenContainer>
      <Logo />
      <Flashcards cards={cards} onCardStatusChange={onCardStatusChange} />
      <Footer cards={cards} />
    </ScreenContainer>
  );
}

const ScreenContainer = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
