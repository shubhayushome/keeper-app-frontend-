import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
function Note(props) {
  return (
    <div className="note">
      <h1>{props.text.title}</h1>
      <p>{props.text.content}</p>
      <button
        onClick={() => {
          props.deletingItems(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
