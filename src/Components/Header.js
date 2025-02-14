import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMailForward, faMobile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<div>
         {/* <!--Topbar Section--> */}
    <div className="topbar">
        <div className="topbar-contact">
            <ul>
                <li><a href="https://wa.link/4or8sf"><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                <li><a href="tel:+917036502424"><span><FontAwesomeIcon icon={faMobile} /> </span>7036500024
                        / 7036502424</a></li>
                <li><a href="mailto:careers@digitinstutite.in"><FontAwesomeIcon icon={faMailForward} /></a></li>
            </ul>
        </div>

        <div className="topbar-social">
            <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>

            <button>Batches</button>
            <button>Enroll Now</button>

        </div>
    </div>
    {/* // <!--Topbar section--> */}

    {/* // <!--Header--> */}

    <header className="main-header">
        <div className="brand-logo">
            <img src="images/logo-wide.png" alt="digit inistute" width="100px" />
        </div>
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Categories">CATEGORIES</Link></li>
                <li><a href=">COURSE</a></li>
                <li><a href=">BECOME AN INSTRUCTOR</a></li>
                <li><Link to="/Contact-US">CONTACT</Link></li>
            </ul>
        </div>

    </header>
    {/* // <!--Header--> */}
    </div>
  )
}

export default Header