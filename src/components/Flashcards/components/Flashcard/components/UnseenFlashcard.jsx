import styled from "styled-components";
import { FlashcardBaseContainer } from "./FlashcardBaseContainer";

export function UnseenFlashcard({ card, index }) {
  return (
    <UnseenFlashcardContainer>
      <p>Pergunta {index + 1}</p>
    </UnseenFlashcardContainer>
  );
}

const UnseenFlashcardContainer = styled(FlashcardBaseContainer)`
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
  }
`;
