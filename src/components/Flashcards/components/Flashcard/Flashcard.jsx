import { UnseenFlashcard } from "./components/UnseenFlashcard";

export function Flashcard({ card, index, onCardStatusChange }) {
  return <UnseenFlashcard card={card} index={index} />;
}
