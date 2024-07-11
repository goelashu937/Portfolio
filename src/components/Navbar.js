import "./NavbarStyles.css";
import React,{useState} from "react";
import { Link } from "react-router-dom";
import { FaBars,FaTimes } from "react-icons/fa";
import Profile from "../assests/profile.png";


export default function Navbar() {
    const [click,setClick]=useState(false);
    const handleClick = ()=>{
        setClick(!click);
    }

    const [color,setColor]=useState(false);
    const updateColor=()=>{
      if(window.scrollY>=100){
        setColor(true)
      }
      else setColor(false)
    }
    window.addEventListener("scroll",updateColor);

  return (
    <div className={color?"header header-bg":"header"}>
      <img className="profilePic" src={Profile} alt="profile"  />
      <Link to="/"><h1 style={{ marginLeft: "50px"}} >Portfolio</h1></Link>
      <ul className={click?"nav-menu active":"nav-menu" }>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Project">Projects</Link>
        </li>
        <li>
          <Link to="/Achievements">Achievements</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click?
        <FaTimes size={20} style={{color:"#fff"}} />
        :<FaBars size={20} style={{color:"#fff"}} />
        } 
       </div>
    </div>
  );
}
