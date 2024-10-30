import React, { useContext } from "react";
import Notes from "./Notes";

const Home = () => {
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Confirm identity
            </button>
          </div>
        </form>
      </div>
      <Notes/>
    </div>
  );
};

export default Home;
