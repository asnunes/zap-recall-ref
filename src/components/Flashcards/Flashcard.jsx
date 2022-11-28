import styled from "styled-components";
import { Flashcard } from "./components";

export function Flashcards({ cards }) {
  return (
    <FlashcardsContainer>
      {cards.map((card) => (
        <Flashcard key={card.id} card={card} />
      ))}
    </FlashcardsContainer>
  );
}

const FlashcardsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
