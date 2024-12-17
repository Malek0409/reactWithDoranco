const Player = () => {
  const score = 85;

  const result = score > 50 ? "Vainqueur" : "Perdant";

  return (
    <div>
      <h1>Page du Joueur</h1>

      <h3>Statut du joueur</h3>
      <p>
        {result} avec un score de {score}
      </p>
    </div>
  );
};

export default Player;
