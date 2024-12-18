import "./App.css";
import Header from "./components/containers/headers/Header.jsx";
import Footer from "./components/containers/footer/footer.jsx";
import User from "./components/user/User.jsx";
import Player from "./components/player/player.jsx";
import Routine from "./components/routine/Routine.jsx";
import Compteur from "./components/compteur/compteur.jsx";
import Menu from "./components/menu/menu.jsx";
function App() {
  const userProps = {
    prenom: "Malek",
    nom: "KHADHRI",
    hobbies: ["Reading", "Coding", "Traveling"],
  };
  return (
    <>
      <Header />
      <main>
        <Compteur />
        <User {...userProps} />
        <Player />
        <Routine />
        <Menu />
      </main>
      <Footer />
    </>
  );
}

export default App;
