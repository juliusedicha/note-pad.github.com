import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(index) {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <Footer />

      {notes.map((note, index) => (
        <Note
          key={index}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(index)}
        />
        
      ))}
    </div>
  );
}

export default App;
