// import { useRef } from "react";
// import "./../style/admin/ad-menu.css"
import Iconhome from "./icon/iconhome";
import Iconlist from "./icon/iconlist";
import Iconperson from "./icon/iconperson";
import Iconplus from "./icon/iconplus";
import { useRef, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../style/navbar.css'
import "../style/admin/ad-menu.css"

// npm install react-icons
function Admenu(props) {
    const adnavRef = useRef();
    const adshowNavbar = () => {
        adnavRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <div className="Naazvbar">
                <nav className="adnav" ref={adnavRef}>
                    <button className="nav-btn nav-close-btn" onClick={adshowNavbar}>
                        <FaTimes />
                    </button>

                    <div className="btnadmenu">
                        <a className="btn-4" href="/home"><Iconhome />HOME</a>
                        <a className="btn-4" href="/admin_reservation"><Iconplus /> reservation</a>
                        <a className="btn-4" href="/admin_user_resa_list"><Iconlist />reservation </a>
                        <a className="btn-4" href="/admin_coach_profil"><Iconperson />coach </a>
                        <a className="btn-4" href="/admin_user_profil"><Iconperson />user </a>
                        <a className="btn-4" href="/admin_condition">conditions</a>
                        <a className="btn-4" href="/admin_news">Actualité</a>
                    </div>

                </nav>

                <button className="nav-btn" onClick={adshowNavbar}>
                    <FaBars />
                </button>
            </div>
        </header>


    );
}


export default Admenu;