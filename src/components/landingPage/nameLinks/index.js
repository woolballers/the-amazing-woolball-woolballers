import SwirlArrowRight from "assets/images/arrows/swirl-arrow-right.svg";

const linksTo = [
  {
    linkee: "Tomlightning",
    cls: "arrowHeightRed",
    linkTypeIcon: <i className="bi bi-chat"></i>,
  },
  { linkee: "Scalo", cls: "arrowHeightGreen" },
  { linkee: "Wolfram", cls: "arrowHeightBlue" },
];

const LinkTo = ({ linker, linkee, cls, linkTypeIcon }) => {
  return (
    <div>
      <span className="GrislyBeast">
        {linker}{" "}
        <img src={SwirlArrowRight} className={cls} alt="Swirl Arrow Right" />{" "}
        {linkee}
      </span>
      &nbsp;{" "}
      {linkTypeIcon || <>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</>}{" "}
      &nbsp; &nbsp; &nbsp; (
      <span className="GrislyBeast">
        {linker}
        <span style={{ color: "orange" }}>#</span>
        {linkee}
      </span>
      )
    </div>
  );
};

export default function NameLinks({ choosenName }) {
  return (
    <>
      <h3>
        {" "}
        <span className="GrislyBeastH3">
          {choosenName}
          <span style={{ color: "orange" }}>#</span>
        </span>
        's Links
      </h3>
      {linksTo.map((link) => (
        <LinkTo
          linker={choosenName}
          linkee={link.linkee}
          cls={link.cls}
          linkTypeIcon={link.linkTypeIcon}
        />
      ))}
    </>
  );
}
