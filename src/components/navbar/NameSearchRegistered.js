import WoolName from "components/woolName";

export default function NameSearchRegistered({ searchedName, tokenData }) {
  return (
    <>
      <WoolName name={searchedName} />
      &nbsp;belongs to {tokenData.owner}.
    </>
  );
}
