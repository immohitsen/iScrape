import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = process.env.HOST;
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await axios.get(`${host}/api/notes/fetchallnotes`, {
        headers: {
          "auth-token": localStorage.getItem('token'),
        },
      });

      setNotes(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await axios.post(
        `${host}/api/notes/addnote`,
        { title, description, tag },
        {
          headers: {
            "auth-token": localStorage.getItem('token'),
          },
        }
      );

      setNotes(notes.concat(response.data));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`${host}/api/notes/deletenote/${id}`, {
        headers: {
          "auth-token": localStorage.getItem('token'),
        },
      });

      console.log(response.data);

      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await axios.put(
        `${host}/api/notes/updatenote/${id}`,
        { title, description, tag },
        {
          headers: {
            "auth-token": localStorage.getItem('token'),
          },
        }
      );

      console.log(response.data);

      let newNotes = [...notes];
      for (let index = 0; index < newNotes.length; index++) {
        if (newNotes[index]._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
