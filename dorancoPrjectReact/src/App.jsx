import "./App.css";
import Header from "./components/containers/headers/Header.jsx";
import Footer from "./components/containers/footer/footer.jsx";
import User from "./components/user/User.jsx";
import Player from "./components/player/player.jsx";
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
        <User {...userProps} />
        <Player />
      </main>
      <Footer />
    </>
  );
}

export default App;
