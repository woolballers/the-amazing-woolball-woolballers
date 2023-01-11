import { useState } from "react";
import Divider from "./Divider";
import RegisteredNames from "components/landingPage/registeredNames";
import NameLinks from "../nameLinks";
import CreateRelationship from "../createRelationships";

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
            <CreateRelationship />

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
