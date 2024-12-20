import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faLocationPin,  } from '@fortawesome/free-solid-svg-icons/faLocationPin';


const Footer = () => {
  return (
    <div>
        {/* <!--Footer Section--> */}
    <footer>
        <div class=" footer-contact">
            <img src="images/logo-wide.png" alt="Footer Logo" width="120px" />

            <ul>
                <li><a href="https://maps.app.goo.gl/YEx3EkNtAa73xJ1Z6" target="_blank" rel="noopener noreferrer" ><span><FontAwesomeIcon icon={faLocationPin}/>
                        </span>#14, 4th Floor, behind Capital Park, Arunodaya Colony, Silicon Valley, Madhapur,
                        Hyderabad, Telangana 500081</a></li>
                <li><a href="https://maps.app.goo.gl/YEx3EkNtAa73xJ1Z6" target="_blank" rel="noopener noreferrer"  ><span><FontAwesomeIcon icon={faLocationPin}/>
                        </span>1-90/B/C/5, Vital Rao Nagar, opposite Melange tower, HUDA Techno Enclave Road, HITEC
                        City, Hyderabad, Telangana 500081</a></li>

                <h4>For Enquiry</h4>
                <li><a href="mailto:Enquiry@digitinstitute.in"><span><i
                                class="fa-solid fa-envelope"></i></span>Enquiry@digitinstitute.in</a></li>
                <li><a href="tel:+917036502424"><span><FontAwesomeIcon icon={faMobile}/></span>+917036502424</a>
                </li>

                <h4>For Hiring</h4>
                <li><a href="mailto: careers@digitinstitute.in"><span><FontAwesomeIcon icon={faEnvelope}/></span>careers@digitinstitute.in</a></li>
            </ul>

        </div>

        <div class="useful-links">
            <h4>Useful Links</h4>
            <ul>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>About us</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Our Courses</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Gallery</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Career</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Book a Demo</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Become An Instructor</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Contact Us </a></li>

            </ul>
        </div>

        <div class="quick-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Payments</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Internship</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Certificates</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Terms&conditions</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Disclaimer</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Privacy&Policy</a></li>
                <li><a href="https://digitinstitute.in/"><span><FontAwesomeIcon icon={faAngleRight}/></span>Refer&Earn</a></li>
            </ul>
        </div>

        <div class="subscribe">
            <h4>Subscribe Newsletter</h4>
            <p>The newsletter helps you to stay connected with our institute and also provides you with all information
                related to courses</p>
            <form action="" method="Post">
                <input type="email" name="email" placeholder="Email Address" value="" required />
                <button type="submit" name="subscribe-btn">submit</button>
            </form>
            <h4>Follow Us</h4>

            <ul>
                <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGooglePlus}/></a></li>
                <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
            </ul>
        </div>
    </footer>
{/* 
<!--Footer Section--> */}

{/* <!--Copyright Section--> */}
<section class="copyright">
    <p> Copyright 2024 | All Rights Reervrd By DIGIT inastitute</p>
</section>

{/* <!--Copyright Section--> */}

{/* <!-- Whatsapp Floating Icon--> */}

<div class="whatsapp-button">
    <i class="fa-brands fa-whatsapp"></i>
</div>
{/* <!-- Whatsapp Floating Icon--> */}
    </div>
  )
}

export default Footer