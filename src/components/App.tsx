import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export interface INoteContent {
  date: string;
  content: string;
}

function App() {
  const [items, setItems] = useState<Array<INoteContent>>([]);

  function addItem(note: INoteContent) {
    const newDate = note.date;
    const newContent = note.content;

    setItems((prevItems: INoteContent[]) => {
      return [...prevItems, { date: newDate, content: newContent }];
    });
  }

  function deleteItem(id: number) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addItem}
      />
      {items.map((note, index) => (
        <Note
          key={index}
          id={index}
          date={note?.date}
          content={note?.content}
          onDelete={deleteItem} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
