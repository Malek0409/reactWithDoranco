import "./App.css";
import Header from "./components/containers/headers/Header.jsx";
import Footer from "./components/containers/footer/footer.jsx";
import User from "./components/user/User.jsx";
function App() {
  return (
    <>
      <Header />
      <main>
        <User />
      </main>
      <Footer />
    </>
  );
}

export default App;
