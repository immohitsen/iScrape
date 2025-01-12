import React, { useState, useContext } from "react";
import noteContext from "../context/notes/noteContext";
import "./NoteItem.css"; // Add custom CSS for zoom-in effect

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  // State to manage zoomed-in card visibility
  const [isCardZoomed, setIsCardZoomed] = useState(false);

  // State to manage description visibility for long text
  const [isFullDescriptionVisible, setIsFullDescriptionVisible] = useState(false);

  // Define max description length
  const MAX_DESCRIPTION_LENGTH = 70; 

  const handleCardClick = () => {
    setIsCardZoomed(true);
  };

  const closeZoomedCard = () => {
    setIsCardZoomed(false);
  };


  return (
    <>
      {/* The Note Card */}
      <div className="col-md-3">
        <div className="card my-3 shadow-sm rounded-lg note-box" >
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            {/* Truncated Description with Read More functionality */}
            <p className="card-text" onClick={handleCardClick}> 
              {isFullDescriptionVisible 
                ? note.description 
                : note.description.length > MAX_DESCRIPTION_LENGTH 
                ? note.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..." 
                : note.description
              }
            </p>
            {note.description.length > MAX_DESCRIPTION_LENGTH}
            <div className="d-flex justify-content-end">
              {/* Delete icon */}
              <i
                className="fa-solid fa-trash mx-2 text-danger"
                style={{ fontSize: "1.2rem", cursor: "pointer" }}
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert("Deleted Successfully", "success");
                }}
              ></i>

              {/* Edit icon */}
              <i
                className="fa-solid fa-pen-to-square mx-2 text-info"
                style={{ fontSize: "1.2rem", cursor: "pointer" }}
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* Zoomed-In Modal */}
      {isCardZoomed && (
        <div className="zoomed-card-overlay" onClick={closeZoomedCard}>
          <div className="zoomed-card-content" onClick={(e) => e.stopPropagation()}>
            <div className="card shadow-lg rounded-lg" style={{ backgroundColor: "#343a40" }}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
                <div className="d-flex justify-content-end">
                  {/* Close icon */}
                  <i
                    className="fa-solid fa-xmark text-light"
                    style={{ fontSize: "1.5rem", cursor: "pointer" }}
                    onClick={closeZoomedCard}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteItem;
