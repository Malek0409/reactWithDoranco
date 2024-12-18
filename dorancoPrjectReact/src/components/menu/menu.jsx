import { Children, useState } from "react";
import Button from "../../ui/button/button";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    console.log();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        onClick={toggleMenu}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        {isMenuOpen ? "Close" : "Open"}
      </Button>
      {isMenuOpen && <div>{Children}</div>}
    </div>
  );
};

export default Menu;
