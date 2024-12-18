import PropTypes from "prop-types";

LastName.propTypes = {
  nom: PropTypes.string.isRequired,
  couleur: PropTypes.string,
};

export default function LastName({ nom, couleur }) {
  return (
    <p
      style={{
        color: couleur ? couleur : "black",
      }}
    >
      Last Name: {nom}
    </p>
  );
}
