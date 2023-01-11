export default function ChooseNameBtn({ setChoosenName, searchedName }) {
  return (
    <button
      className="btn btn-warning"
      onClick={() => setChoosenName(searchedName)}
    >
      Choose
    </button>
  );
}
