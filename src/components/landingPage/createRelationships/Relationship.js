export default function Relationship({ name, label, placeholder }) {
  return (
    <div className="row my-1">
      <div className="col-md-4">
        <input type="checkbox" className="form-check-input" name={name}></input>
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
