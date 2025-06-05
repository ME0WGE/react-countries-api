import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return(

    <div className="divNavGlo">
      <h2>Where in the world?</h2>
      <p><FontAwesomeIcon icon={faMoon} />  Dark Mode</p>  
    
    </div>
  )
}
