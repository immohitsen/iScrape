import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";


const AddNote = () => {
  const context = useContext(noteContext);
  const {addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default"})

  const handleClick = (e) =>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  const onChange = (e) => {
    setNote({...note, [e.target.name]: e.target.value})
  }

  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            rows="3"
            onChange={onChange}
          ></input>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3" onClick={handleClick}>
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
