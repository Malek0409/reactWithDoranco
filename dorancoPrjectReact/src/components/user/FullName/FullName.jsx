import PropTypes from "prop-types";
import FirstName from "./FirstName";
import LastName from "./LastName";

FullName.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
};

export default function FullName({ prenom, nom }) {
  return (
    <div>
      <h3>Full Name</h3>
      <FirstName prenom={prenom} />
      <LastName nom={nom} />
    </div>
  );
}
