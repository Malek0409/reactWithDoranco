import PropTypes from "prop-types";

ButtonRoutine.propTypes = {
  children: PropTypes.node.isRequired,
  couleur: PropTypes.string,
  onClick: PropTypes.func,
};

export default function ButtonRoutine({ couleur, children, onClick }) {
  return (
    <button
      style={{
        backgroundColor: couleur ? couleur : "black",

        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
