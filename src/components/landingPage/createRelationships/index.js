import Relationship from "./Relationship";

export default function CreateRelationship() {
  return (
    <form>
      <div className="form-group">
        What's your relation?
        <div className="row">
          <Relationship
            name="friendship"
            label="Friendship"
            placeholder="How long?"
          />
          <Relationship
            name="collaborated"
            label="Work"
            placeholder="Which organization?"
          />
          <Relationship
            name="community"
            label="Shared communities"
            placeholder="Which communities?"
          />
        </div>
      </div>
      <button className="button-orange" onClick={() => {}}>
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
