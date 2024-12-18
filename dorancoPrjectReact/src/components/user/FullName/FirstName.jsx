import PropTypes from "prop-types";

FirstName.propTypes = {
  prenom: PropTypes.string.isRequired,
  couleur: PropTypes.string,
};

export default function FirstName({ prenom, couleur }) {
  return (
    <p
      style={{
        color: couleur ? couleur : "black",
      }}
    >
      First Name: {prenom}
    </p>
  );
}
