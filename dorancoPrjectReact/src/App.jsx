import "./App.css";
import Header from "./components/containers/headers/Header.jsx";
import Footer from "./components/containers/footer/footer.jsx";
import User from "./components/user/User.jsx";
import Form from "./components/form/Form.jsx";
import { createContext } from "react";

export const userContext = createContext();

function App() {
  const user = {
    prenom: "Malek",
    nom: "KHADHRI",
    hobbies: ["Reading", "Coding", "Traveling"],
  };
  return (
    <userContext.Provider value={user}>
      <Header />
      <main>
        <Form />
        <User />
      </main>
      <Footer />
    </userContext.Provider>
  );
}

export default App;
