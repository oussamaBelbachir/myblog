import React from 'react'
import './footer.styles.scss';
import {Link} from 'react-router-dom';

import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <div className="footer container">
                <h3>Buzzy</h3>

                <div className="footer__info">
                    <div className="left">
                        <h4>about us</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className="right">
                        <h4>follow us</h4>
                        <div className="right__socialmedia">
                            <AiFillFacebook />
                            <AiFillTwitterSquare />
                            <AiFillYoutube />
                            <AiFillInstagram />
                        </div>
                    </div>
                </div>
                <div className="borderbuttom"></div>

                <div className="footer__bottom">
                    <div className="copyright">
                        © Copyright 2020-2021
                    </div>
                    <div className="footer__bottom__pages">
                        <ul>
                            <li><Link to="/">home</Link></li>
                            <li><Link to="/privacy">privacy policy</Link></li>
                            <li><Link to="/terms">terms of service</Link></li>
                            <li><Link to="/gdprprivacy">gdpr privacy policy</Link></li>
                            <li><Link to="/contact">contact us</Link></li> 
                        </ul>
                    </div>
                </div>
            </div>        
        </footer>

    )
}

export default Footer
