import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [texts, addText] = useState({ title: "", content: "" });
  const [note, addNote] = useState([]);
  const [isExpanded, Expand] = useState(false);
  function expand() {
    Expand(true);
  }
  function handleChange(event) {
    const newName = event.target.value;
    const itemName = event.target.name;
    addText((prevValue) => {
      if (itemName === "title") {
        return { title: newName, content: prevValue.content };
      } else {
        return { title: prevValue.title, content: newName };
      }
    });
  }
  function addItem(event) {
    addNote((prevValue) => {
      return [...prevValue, texts];
    });
    addText({ title: "", content: "" });
    Expand(false);
    event.preventDefault();
  }
  function deleteItem(id) {
    addNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea
        text={texts}
        handlingChange={handleChange}
        addingItem={addItem}
        hold={isExpanded}
        expansion={expand}
      />
      {note.map((todoItem, index) => (
        <Note
          key={index}
          id={index}
          text={todoItem}
          deletingItems={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
