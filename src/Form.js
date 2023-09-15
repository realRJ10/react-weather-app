import React from "react";

export default function Form() {
  return (
    <form>
      <div class="row">
        <div class="col-8">
          <div class="mb-3">
            <input
              type="search"
              class="form-control"
              placeholder="Type the city"
              id="input"
            />
          </div>
        </div>
        <div class="col-2">
          <input
            type="submit"
            value="Search"
            id="button"
            class="btn btn-primary"
          />
        </div>
        <div class="col-2">
          <input
            type="button"
            value="current"
            id="current"
            class="btn btn-warning"
          />
        </div>
      </div>
    </form>
  );
}
