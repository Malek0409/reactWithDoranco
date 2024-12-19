import { useContext } from "react";
import { userContext } from "../../../App";

export default function FirstName() {
  const user = useContext(userContext);

  return (
    <p
      style={{
        color: user.couleur ? user.couleur : "black",
      }}
    >
      First Name: {user.prenom}
    </p>
  );
}
