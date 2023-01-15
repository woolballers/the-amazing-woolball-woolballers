import Relationship from "./Relationship";
import React, { useState } from "react";

export default function CreateRelationship({ selectedName }) {
  const [friendship, setFriendship] = useState(false);
  const [collaborated, setCollaborated] = useState(false);
  const [community, setCommunity] = useState(false);

  const [isError, setIsError] = useState("");

  const checkCreateClick = () => {
    if (friendship || collaborated || community) {
      return true;
    } else {
      return false;
    }
  };

  const createClickHandler = (e) => {
    e.preventDefault();
    if (checkCreateClick()) {
      console.log("create relationship");
    } else {
      setIsError("Please select at least one relationship type.");
    }
  };

  return (
    <form>
      <div className="form-group">
        What's your relation?
        <div className="row">
          <Relationship
            name="friendship"
            label="Friendship"
            placeholder="How long?"
            isChecked={friendship}
            setIsChecked={setFriendship}
          />
          <Relationship
            name="collaborated"
            label="Work"
            placeholder="Which organization?"
            isChecked={collaborated}
            setIsChecked={setCollaborated}
          />
          <Relationship
            name="community"
            label="Shared communities"
            placeholder="Which communities?"
            isChecked={community}
            setIsChecked={setCommunity}
          />
        </div>
      </div>
      <button
        className="button-orange"
        disabled={selectedName == null}
        onClick={createClickHandler}
      >
        {" "}
        Create{" "}
      </button>
    </form>
  );
}

/*
<div className="col-md-4">
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                name="friendship"
              ></input>
              <label className="form-check-label" htmlFor="friendship">
                Friendship
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                name="collaborated"
              ></input>
              <label className="form-check-label" htmlFor="collaborated">
                Work
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-check-input"
                name="community"
              ></input>
              <label className="form-check-label" htmlFor="community">
                Shared communities
              </label>
            </div>
          </div>
          <div className="col-md-8">
            <div>
              <input
                type="text"
                className="mx-2"
                id="wname"
                placeholder="How long?"
              ></input>
            </div>
            <div>
              <input
                type="text"
                className="mx-2"
                id="wname"
                placeholder="Which organization?"
              ></input>
            </div>
            <div>
              <input
                type="text"
                className="mx-2"
                id="wname"
                placeholder="Which communities?"
              ></input>
            </div>
          </div>
          */
