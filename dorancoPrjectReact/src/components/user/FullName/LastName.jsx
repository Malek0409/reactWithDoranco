import { useContext } from "react";
import { userContext } from "../../../App";

export default function LastName() {
  const user = useContext(userContext);
  return (
    <p
      style={{
        color: user.couleur ? user.couleur : "black",
      }}
    >
      Last Name: {user.nom}
    </p>
  );
}
