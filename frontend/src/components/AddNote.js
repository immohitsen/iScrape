import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  // State to manage the visibility of the form
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({
      title: "",
      description: "",
      tag: "",
    });
    props.showAlert("Added Successfully", "success");
    setIsFormVisible(false); // Hide the form after submitting the note
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="container my-3">
      {/* Button to show/hide the form */}
      <button
        className="btn btn-success mb-3"
        onClick={toggleFormVisibility}
      >
        {isFormVisible ? "Cancel" : "Add a Note"}
      </button>

      {/* Conditionally render the form */}
      {isFormVisible && (
        <div className="form-container mt-3">
          <h2 className="elegant-heading display-5">Add a Note</h2>
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
                value={note.title}
                onChange={onChange}
                minLength={5}
                required
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
                value={note.description}
                rows="3"
                onChange={onChange}
                minLength={5}
                required
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                value={note.tag}
                rows="3"
                onChange={onChange}
                minLength={5}
                required
              ></input>
            </div>
            <div className="col-auto">
              <button
                disabled={note.title.length < 5 || note.description.length < 5}
                type="submit"
                className="btn btn-primary mb-3"
                onClick={handleClick}
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddNote;
