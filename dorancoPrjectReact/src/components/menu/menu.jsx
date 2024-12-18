import { useState } from "react";
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
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "gray",
            border: "1px solid ",
            padding: "10px",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li style={{ padding: "5px 10px", cursor: "pointer" }}>task 1</li>
            <li style={{ padding: "5px 10px", cursor: "pointer" }}>task 2</li>
            <li style={{ padding: "5px 10px", cursor: "pointer" }}>task 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menu;
