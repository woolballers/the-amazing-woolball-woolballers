import { useState } from "react";

import RegisteredNames from "components/landingPage/registeredNames";
import SwirlArrowRight from "assets/images/arrows/swirl-arrow-right.svg";

function Divider(props) {
  const { primaryColor, secondaryColor, heightValue } = props;
  return (
    <hr
      style={{
        color: primaryColor,
        backgroundColor: secondaryColor,
        height: heightValue,
        marginRight: "10%",
      }}
    />
  );
}

function NameManagement() {
  const [selectedName, setSelectedName] = useState(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div>
            <button className="button-hashtag">
              Create{" "}
              <span className="GrislyBeast">
                Neiman<span style={{ color: "orange" }}>#</span>
                {selectedName == "none" || selectedName == null
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
            ></Divider>
            <h3>
              {" "}
              <span className="GrislyBeastH3">
                Neiman<span style={{ color: "orange" }}>#</span>
              </span>
              's Links
            </h3>
            <div>
              <span className="GrislyBeast">
                Neiman{" "}
                <img
                  src={SwirlArrowRight}
                  className="arrowHeightRed"
                  alt="Swirl Arrow Right"
                />{" "}
                Tomlightning
              </span>
              &nbsp; <i className="bi bi-chat"></i> &nbsp; &nbsp; &nbsp; (
              <span className="GrislyBeast">
                Neiman<span style={{ color: "orange" }}>#</span>Tomlightning
              </span>
              )
            </div>
            <div>
              <span className="GrislyBeast">
                Neiman{" "}
                <img
                  src={SwirlArrowRight}
                  className="arrowHeightGreen"
                  alt="Swirl Arrow Right"
                />{" "}
                Scalo
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; (
              <span className="GrislyBeast">
                Neiman<span style={{ color: "orange" }}>#</span>Scalo
              </span>
              )
            </div>
            <div>
              <span className="GrislyBeast">
                Neiman{" "}
                <img
                  src={SwirlArrowRight}
                  className="arrowHeightBlue"
                  alt="Swirl Arrow Right"
                />{" "}
                Wolfram
              </span>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (
              <span className="GrislyBeast">
                Neiman<span style={{ color: "orange" }}>#</span>Wolfram
              </span>
              )
            </div>
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
