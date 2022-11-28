import styled from "styled-components";

export function Flashcard({ card }) {
  return (
    <FlashcardContainer>
      <p>{card.question}</p>
    </FlashcardContainer>
  );
}

const FlashcardContainer = styled.div`
  width: 100%;
  padding: 2opx;
  border-radius: 10px;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
`;
