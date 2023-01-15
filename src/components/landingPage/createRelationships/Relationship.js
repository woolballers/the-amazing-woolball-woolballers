export default function Relationship({
  name,
  label,
  placeholder,
  isChecked,
  setIsChecked,
}) {
  return (
    <div className="row my-1">
      <div className="col-md-4">
        <input
          type="checkbox"
          className="form-check-input"
          name={name}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        ></input>
        <label className="form-check-label" htmlFor={name}>
          {label}
        </label>
      </div>
      <div className="col-md-8">
        <input
          type="text"
          className="mx-2"
          id="wname"
          placeholder={placeholder}
        ></input>
      </div>
    </div>
  );
}
