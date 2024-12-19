import { useContext, useState } from "react";
import { userContext } from "../../../App";

export default function Hobbies() {
  const user = useContext(userContext);
  const [hobbyList, setHobbyList] = useState(user.hobbies);
  const [newHobby, setNewHobby] = useState("");

  const handleAddHobby = () => {
    if (newHobby === "") {
      alert("Le champ ne peut pas être vide !");
      return;
    }

    setHobbyList([...hobbyList, newHobby]);
    setNewHobby("");
  };

  function changeHobby(e) {
    setNewHobby(e.target.value);
  }

  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        {hobbyList.map((hobby, index) => (
          <p
            key={index}
            style={{ color: user.couleur ? user.couleur : "black" }}
          >
            {hobby}
          </p>
        ))}
      </ul>

      <div>
        <input
          type="text"
          placeholder="Ajouter un hobby"
          value={newHobby}
          onChange={changeHobby}
        />
        <button onClick={handleAddHobby}>Ajouter</button>
      </div>
    </div>
  );
}
