import "./App.css";
import Header from "./components/containers/headers/Header.jsx";
import Footer from "./components/containers/footer/footer.jsx";
import User from "./components/user/User.jsx";
import Player from "./components/player/player.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <User />
        <Player />
      </main>
      <Footer />
    </>
  );
}

export default App;
