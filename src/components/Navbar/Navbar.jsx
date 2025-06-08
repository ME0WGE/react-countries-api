import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return(
    <div className="divNavGlo">
      <h2>Where in the world?</h2>
      <button onClick={toggleDarkMode} className="dark-mode-btn">
        <FontAwesomeIcon icon={faMoon} />
        {darkMode ? ' Light Mode' : ' Dark Mode'}
      </button>
    </div>
  )
}

