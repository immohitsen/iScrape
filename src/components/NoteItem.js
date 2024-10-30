import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">{note.title}</h5>
          <p class="card-text">
            {note.description} Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quibusdam error saepe quas nemo dolore
            voluptatibus odit quia ipsum numquam, deleniti doloribus impedit
            vero magnam unde perferendis repellat mollitia dolores hic id cum
            adipisci. Veniam, veritatis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
