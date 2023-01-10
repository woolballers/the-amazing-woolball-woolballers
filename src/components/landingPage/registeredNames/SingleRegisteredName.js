import WoolName from "components/woolName";

const nameStyle = (isSelected) => {
  if (!isSelected) return "btn bg-transparent";
  else return "btn bg-transparent border border-4 border-primary";
};

export default function SingleRegisteredName({
  name,
  setSelectedName,
  isSelected,
}) {
  return (
    <button
      className={nameStyle(isSelected)}
      id={name}
      onClick={() =>
        isSelected ? setSelectedName("none") : setSelectedName(name)
      }
    >
      <WoolName name={name} />
    </button>
  );
}
