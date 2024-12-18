import Button from "../../ui/button/button";

export default function Routine() {
  const handleClick = (action) => {
    alert(`Vous avez choisi de ${action}`);
  };

  return (
    <div>
      <h3>Ma routine</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button couleur="green" onClick={() => handleClick("manger")}>
          Manger
        </Button>
        <Button couleur="blue" onClick={() => handleClick("dormir")}>
          Dormir
        </Button>
        <Button couleur="red" onClick={() => handleClick("étudier")}>
          Étudier
        </Button>
      </div>
    </div>
  );
}
