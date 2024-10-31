import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "671ab7b5d7d3a7236dd8b249",
          "user": "6717ab43c9435b7b19e05995",
          "title": "hey Mohit",
          "description": "Hey, this is Mohit sen, how're you doing?",
          "tag": "Personal",
          "date": "1729804213330",
          "__v": 0
        },
        {
          "_id": "671ab809dfb9921ad3d69666",
          "user": "6717ab43c9435b7b19e05995",
          "title": "hey Arpit",
          "description": "Hey, this is Arpit Awasthi, how're you doing?",
          "tag": "Personal",
          "date": "1729804297116",
          "__v": 0
        },
        {
          "_id": "671ab80adfb9921ad3d69668",
          "user": "6717ab43c9435b7b19e05995",
          "title": "hey Arpit",
          "description": "Hey, this is Arpit Awasthi, how're you doing?",
          "tag": "Personal",
          "date": "1729804298672",
          "__v": 0
        },
        {
          "_id": "671ab80adfb9921ad3d6966a",
          "user": "6717ab43c9435b7b19e05995",
          "title": "hey Arpit",
          "description": "Hey, this is Arpit Awasthi, how're you doing?",
          "tag": "Personal",
          "date": "1729804298808",
          "__v": 0
        },
        {
            "_id": "671ab80adfb9921ad3d69663",
            "user": "6717ab43c9435b7b19e05995",
            "title": "hey Arpit",
            "description": "Hey, this is Arpit Awasthi, how're you doing?",
            "tag": "Personal",
            "date": "1729804298672",
            "__v": 0
          },
          {
            "_id": "671ab80adfb9921ad3d6966b",
            "user": "6717ab43c9435b7b19e05995",
            "title": "hey Arpit",
            "description": "Hey, this is Arpit Awasthi, how're you doing?",
            "tag": "Personal",
            "date": "1729804298808",
            "__v": 0
          },
          {
            "_id": "671ab80adfb9921ad3d6966v",
            "user": "6717ab43c9435b7b19e05995",
            "title": "hey Arpit",
            "description": "Hey, this is Arpit Awasthi, how're you doing?",
            "tag": "Personal",
            "date": "1729804298672",
            "__v": 0
          },
          {
            "_id": "671ab80adfb9921ad3d6966c",
            "user": "6717ab43c9435b7b19e05995",
            "title": "hey Arpit",
            "description": "Hey, this is Arpit Awasthi, how're you doing?",
            "tag": "Personal",
            "date": "1729804298808",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial)


      // Add a Note
      const addNote = (title, description, tag)=> {
        // TODO: API Call
        console.log("Adding a new Note.")
        const note = {
            "_id": "671ab80adfb9921ad3d6966ca",
            "user": "6717ab43c9435b7b19e05995",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "1729804298808",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote = (id)=> {
        // TODO: API Call
        console.log("Deleting the node with id "+id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      // Edit a Note
      const editNote = ()=> {
        
      }

      return (
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;