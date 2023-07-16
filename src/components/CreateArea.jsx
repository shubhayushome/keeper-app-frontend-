import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
function CreateArea(props) {
  return (
    <div>
      <form className="create-note" onSubmit={props.addingItem}>
        {props.hold && (
          <input
            onChange={props.handlingChange}
            name="title"
            placeholder="Title"
            value={props.text.title}
          />
        )}
        <textarea
          onChange={props.handlingChange}
          name="content"
          onClick={props.expansion}
          placeholder="Take a note..."
          rows={props.hold ? 3 : 1}
          value={props.text.content}
        />
        <Zoom in={props.hold}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
