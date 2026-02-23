import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faAddressBook, faBook } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

export default function Menu() {
    return (
        <nav>
            <div className="left">
                <Link to="/" className="nav-link">
                    <img src={logo}/>
                </Link>
            </div>
            <div className="right">
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                    <FontAwesomeIcon className="nav-icon" icon={faCircleInfo} />
                    <p className="nav-title"> about </p>
                </NavLink>
                <NavLink to="/characters" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                    <FontAwesomeIcon className="nav-icon" icon={faAddressBook} />
                    <p className="nav-title"> characters </p>
                </NavLink>
                <NavLink to="/comics" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                    <FontAwesomeIcon className="nav-icon" icon={faBook} />
                    <p className="nav-title"> comics </p>
                </NavLink>
            </div>
        </nav>
    )
}