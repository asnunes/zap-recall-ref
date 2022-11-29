import { useMemo } from "react";
import styled from "styled-components";

import { FlashcardBaseContainer } from "./FlashcardBaseContainer";

import { CARD_STATUS } from "../../../../../constants";
import imageRight from "../../../../../assets/img/icone_certo.png";
import imagePartial from "../../../../../assets/img/icone_quase.png";
import imageWrong from "../../../../../assets/img/icone_erro.png";

export function AnsweredFlashcard({ card, index }) {
  const cardData = useMemo(() => {
    if (card.status === CARD_STATUS.ZAPPED)
      return {
        image: imageRight,
        color: "#2FBE34",
      };

    if (card.status === CARD_STATUS.ALMOST_FORGOTTEN)
      return {
        image: imagePartial,
        color: "#FF922E",
      };

    return {
      image: imageWrong,
      color: "#FF3030",
    };
  }, [card]);

  return (
    <AnsweredFlashcardContainer color={cardData.color}>
      <p>Pergunta {index + 1}</p>
      <img src={cardData.image} alt="answered flashcard" />
    </AnsweredFlashcardContainer>
  );
}

const AnsweredFlashcardContainer = styled(FlashcardBaseContainer)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 14pt;
    text-decoration: line-through;
    color: ${(props) => props.color};
  }
`;
