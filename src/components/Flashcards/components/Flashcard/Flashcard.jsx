import { ClosedFlashcard } from "./components/ClosedFlashcard";
import { CARD_STATUS } from "../../../../constants";
import { OpenedFlashcard } from "./components";

export function Flashcard({ card, index, onStatusChange }) {
  function onCardOpen() {
    onStatusChange(card, CARD_STATUS.OPENED);
  }

  function onCardFlip() {
    onStatusChange(card, CARD_STATUS.CLOSED);
  }

  switch (card.status) {
    case CARD_STATUS.OPENED:
      return <OpenedFlashcard card={card} onCardFlip={onCardFlip} />;
    default:
      return (
        <ClosedFlashcard card={card} index={index} onCardOpen={onCardOpen} />
      );
  }
}
