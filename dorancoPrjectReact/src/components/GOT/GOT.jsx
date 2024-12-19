import { useEffect, useState } from "react";

const apiGetPersonnage = "https:Thronesapi.com/api/v2/Characters";

async function getPersonnage() {
  const res = await fetch(apiGetPersonnage);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (Error) {
    return Error;
  }
}

export default function GOT() {
  const [personnages, setPersonnages] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      getPersonnage()
        .then((data) => {
          setPersonnages(data);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des personnages:",
            error
          );
        });
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Personnages de Game of Thrones</h2>
      <div>
        {personnages.length > 0 ? (
          personnages.map((personnage) => (
            <div key={personnage.id} style={{ marginBottom: "20px" }}>
              <h3>
                {personnage.fullName} ({personnage.title})
              </h3>
              <p>Famille : {personnage.family}</p>
              <img
                src={personnage.imageUrl}
                alt={personnage.fullName}
                width={100}
              />
            </div>
          ))
        ) : (
          <p>Aucun personnage trouvé.</p>
        )}
      </div>
    </div>
  );
}
