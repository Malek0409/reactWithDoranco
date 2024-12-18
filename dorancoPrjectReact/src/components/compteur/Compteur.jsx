import { useState } from "react";
import Button from "../../ui/button/button";

export default function Compteur() {
  const [compteur, setCompteur] = useState(0);

  function increment() {
    setCompteur(compteur + 1);
  }
  function decrement() {
    setCompteur(compteur - 1);
  }

  return (
    <div>
      <p>{compteur}</p>
      <Button onClick={increment}> increment</Button>
      <Button onClick={decrement}> decrement</Button>
    </div>
  );
}
