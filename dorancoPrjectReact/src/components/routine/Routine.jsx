import ButtonRoutine from "../../ui/button/buttonRoutine";

export default function Routine() {
  const handleClick = (action) => {
    alert(`Vous avez choisi de ${action}`);
  };

  return (
    <div>
      <h3>Ma routine</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <ButtonRoutine couleur="green" onClick={() => handleClick("manger")}>
          Manger
        </ButtonRoutine>
        <ButtonRoutine couleur="blue" onClick={() => handleClick("dormir")}>
          Dormir
        </ButtonRoutine>
        <ButtonRoutine couleur="red" onClick={() => handleClick("étudier")}>
          Étudier
        </ButtonRoutine>
      </div>
    </div>
  );
}
