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
          }
      ]
      const [notes, setNotes] = useState(notesInitial)
      return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;