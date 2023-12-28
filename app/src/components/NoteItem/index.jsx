import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles/";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input value={value} type="text" readOnly={!isNew} {...rest} />

      <button
        onClick={onClick}
        type="button"
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
