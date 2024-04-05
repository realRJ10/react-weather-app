import React from "react";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-8">
          <div className="mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Type the city"
              id="input"
            />
          </div>
        </div>
        <div className="col-2">
          <input type="submit" value="Search" id="button" className="btn" />
        </div>
        <div className="col-2">
          <input type="button" value="Current" id="current" className="btn" />
        </div>
      </div>
    </form>
  );
}
