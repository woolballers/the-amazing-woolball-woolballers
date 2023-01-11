export default function Divider(props) {
  const { primaryColor, secondaryColor, heightValue } = props;
  return (
    <hr
      style={{
        color: primaryColor,
        backgroundColor: secondaryColor,
        height: heightValue,
        marginRight: "10%",
      }}
    />
  );
}
