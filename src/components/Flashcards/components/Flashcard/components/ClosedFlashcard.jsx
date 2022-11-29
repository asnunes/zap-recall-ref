import styled from "styled-components";
import { FlashcardBaseContainer } from "./FlashcardBaseContainer";
import playImage from "../../../../../assets/img/seta_play.png";

export function ClosedFlashcard({ card, index, onCardOpen }) {
  return (
    <ClosedFlashcardContainer>
      <p>Pergunta {index + 1}</p>
      <img
        src={playImage}
        alt="open flashcard"
        onClick={() => onCardOpen(card)}
      />
    </ClosedFlashcardContainer>
  );
}

const ClosedFlashcardContainer = styled(FlashcardBaseContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 14pt;
  }
`;
