import WoolName from "components/woolName";

export default function NameSearchUnregistered({ searchedName }) {
  return (
    <>
      <WoolName name={searchedName} />
      &nbsp;is unregistered{" "}
      <button className="btn btn-warning">Register</button>
    </>
  );
}
