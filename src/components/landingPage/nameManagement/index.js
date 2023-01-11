import { useState } from "react";
import Divider from "./Divider";
import RegisteredNames from "components/landingPage/registeredNames";
import NameLinks from "../nameLinks";
function NameManagement({ choosenName }) {
  const [selectedName, setSelectedName] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div>
            <button className="button-hashtag">
              Create{" "}
              <span className="GrislyBeast">
                {choosenName}
                <span style={{ color: "orange" }}>#</span>
                {selectedName === "none" || selectedName == null
                  ? "???"
                  : selectedName}
              </span>
              .
            </button>
          </div>

          <div>
            <form>
              <div className="form-group">
                What's your relation?
                <div className="row">
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
                      <label
                        className="form-check-label"
                        htmlFor="collaborated"
                      >
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
                </div>
              </div>
              <button className="button-orange"> Create </button>
            </form>

            <Divider
              primaryColor="orange"
              secondaryColor="orange"
              heightValue={5}
            />
            <NameLinks choosenName={choosenName} />
          </div>
        </div>

        <div className="col-lg-6 col-md-12">
          <RegisteredNames
            setSelectedName={setSelectedName}
            selectedName={selectedName}
          />
        </div>
      </div>
    </div>
  );
}

export default NameManagement;
