import { useState } from "react";
import Button from "../../ui/button/button";

const Form = () => {
  const [fullNameInput, setFullNameInput] = useState("malek");
  const [fullNameInputError, setFullNameInputError] = useState("");

  const [messageInput, setMessageInput] = useState("");
  const [messageError, setMessageError] = useState("");

  function gereFullName(event) {
    const valeur = event.target.value;
    setFullNameInput(valeur);
    fullNameInputError("");
  }

  if (fullNameInput == "") {
    setFullNameInputError("nom et prénom est obliqatoire");
    return;
  }
  function gereMessage(e) {
    const message = e.target.value;
    setMessageInput(message);
    setMessageError("");
  }

  if (fullNameInput == "") {
    setFullNameInputError("nom et prénom est obliqatoire");
    return;
  }

  if ((messageInput || "", messageError)) {
    setMessageError("error");
    return;
  }

  function submit() {
    alert("tell me" + fullNameInput);
    setFullNameInput("");
  }

  return (
    <div>
      <h2>Creer un compte</h2>
      <input
        className="bg-slate-500 p-2 w-full"
        type="text"
        placeholder="prénom et nom"
        onChange={gereFullName}
      />
      <textarea name="message" id="message" onChange={gereMessage}></textarea>

      <Button onClick={submit}>Ajouter</Button>
    </div>
  );
};

export default Form;
