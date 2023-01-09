import WoolName from "components/woolName";
import SingleRegisteredName from "./SingleRegisteredName";

export default function RegisteredNames({ setSelectedName, selectedName }) {
  const nameStyle = (name) => {
    if (name !== selectedName) return "btn bg-transparent";
    else return "btn bg-transparent border border-4 border-primary";
  };

  return (
    <>
      <div
        className="names-box"
        data-augmented-ui="tl-2-round-inset tr-2-round-inset br-2-scoop-inset bl-2-scoop-xy both"
      >
        <h3 className="text-center GrislyBeast"> Registered Names </h3>
        {["tomlightning", "ginbasil", "scalo"].map((name) => (
          <SingleRegisteredName
            key={name}
            name={name}
            nameStyle={nameStyle}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
          />
        ))}
      </div>
      &nbsp;
      <div>
        <h3> Woolball (All Links) </h3>
      </div>
    </>
  );
}
