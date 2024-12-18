import PropTypes from "prop-types";

Hobbies.propTypes = {
  hobbies: PropTypes.array.isRequired,
  couleur: PropTypes.string,
};

export default function Hobbies({ hobbies, couleur }) {
  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <p key={index} style={{ color: couleur ? couleur : "black" }}>
            {hobby}
          </p>
        ))}
      </ul>
    </div>
  );
}
