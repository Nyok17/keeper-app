import React, { useState } from "react";

function CreateArea(props) {

  const[note, setNote]= useState({
    title: "",
    content: ""
  })

  function handleChange(e){
    const{name, value}= e.target

    setNote(prevNote=>{
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(e){
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
  })

    e.preventDefault()
  }


  return (
    <div>
      <form>
        <input name="title" value={note.title} onChange={handleChange}placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange}placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
