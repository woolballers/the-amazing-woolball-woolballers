import WoolName from "components/woolName";

export default function NameSearchRegistered({ searchedName }) {
  return (
    <>
      <WoolName name={searchedName} />
      &nbsp;belongs to 0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5.
    </>
  );
}
