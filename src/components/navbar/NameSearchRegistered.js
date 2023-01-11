import WoolName from "components/woolName";
import ChooseNameBtn from "components/navbar/ChooseNameBtn";

export default function NameSearchRegistered({
  searchedName,
  tokenData,
  setChoosenName,
}) {
  return (
    <>
      <WoolName name={searchedName} />
      &nbsp;belongs to {tokenData.owner}.
      <ChooseNameBtn
        setChoosenName={setChoosenName}
        searchedName={searchedName}
      />
    </>
  );
}
