import PropTypes from "prop-types";

FullName.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
};

const FullName = ({ prenom, nom }) => {
  return (
    <div>
      <h3>Full Name</h3>
      <p style={{ color: "red" }}>First Name: {prenom}</p>
      <p style={{ color: "green" }}>Last Name: {nom}</p>
    </div>
  );
};

export default FullName;
