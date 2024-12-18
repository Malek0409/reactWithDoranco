import FullName from "./FullName/FullName";
import Hobbies from "./Hobbies/Hobbies";
import PropTypes from "prop-types";

User.propTypes = {
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  hobbies: PropTypes.array.isRequired,
};

export default function User({ prenom, nom, hobbies }) {
  return (
    <div>
      <h2>User Information</h2>
      <FullName prenom={prenom} nom={nom} />
      <Hobbies hobbies={hobbies} couleur="blue" />
    </div>
  );
}
