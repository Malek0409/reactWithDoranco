import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  couleur: PropTypes.string,
};

export default function Button({ couleur, children }) {
  console.log();
  return (
    <button
      className="text-neutral-100"
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        backgroundColor: couleur ? couleur : "black",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
