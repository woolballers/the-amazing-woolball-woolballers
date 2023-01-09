import WoolName from "components/woolName";

export default function SingleRegisteredName({
  name,
  nameStyle,
  setSelectedName,
  selectedName,
}) {
  return (
    <button
      className={nameStyle(name)}
      id={name}
      onClick={() =>
        selectedName === name ? setSelectedName("none") : setSelectedName(name)
      }
    >
      <WoolName name={name} />
    </button>
  );
}
