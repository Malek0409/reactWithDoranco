import "./App.css";
import Header from "./components/containers/headers/Header.jsx";
import Footer from "./components/containers/footer/footer.jsx";
import User from "./components/user/User.jsx";
import Form from "./components/form/Form.jsx";
import { createContext, useEffect, useState } from "react";
import GOT from "./components/GOT/GOT.jsx";

export const userContext = createContext();

function App() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    const habdleResize = (e) => {
      setSize(e.target.innerWidth);
    };
    window.addEventListener("resize", habdleResize);
    return () => {
      window.removeEventListener("resize", habdleResize);
    };
  }, []);

  const user = {
    prenom: "Malek",
    nom: "KHADHRI",
    hobbies: ["Reading", "Coding", "Traveling"],
  };

  return (
    <userContext.Provider value={user}>
      <div>
        <p>{size}</p>
        <GOT />
        <Header />
        <main>
          <Form />
          <User />
        </main>
        <Footer />
      </div>
    </userContext.Provider>
  );
}

export default App;
