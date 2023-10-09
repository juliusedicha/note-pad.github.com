import React, { useState } from "react";
import Fab from '@mui/material/Fab'; // Assuming you are using Material-UI v5
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
const [isExpanded, setExpanded] = useState(false); 


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    event.preventDefault(); // Prevent form submission, if it's a form

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }

function expand(){
  setExpanded(true)
}



  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {isExpanded && (
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        )}

        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />

        <Fab type="submit">
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
