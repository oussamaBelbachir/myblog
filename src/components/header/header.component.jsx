import React ,{useState}from 'react'
import './header.styles.scss';
import {Link} from 'react-router-dom';

import { AiOutlineMenu,AiFillCloseCircle} from "react-icons/ai";
function Header() {

    const [openMenu , setOpenMenu]= useState(false);

    const setMenu = () => {
        setOpenMenu(!openMenu);
    }

 

    return (
        <header>
            <div className="header container">
                <Link to="/"><h1>Buzzy</h1></Link>
                <div className={`header__list ${openMenu ? "open" : ""}`}>
                    <AiFillCloseCircle className="header__list__close"  onClick={setMenu}/>
                    <ul>
                        <li onClick={setMenu}><Link to="/">home</Link></li>
                        <li onClick={setMenu}><Link to={`/articles/design`}>design</Link></li>
                        <li onClick={setMenu}><Link to={`/articles/food`}>food</Link></li>
                        <li onClick={setMenu}><Link to={`/articles/health`}>health</Link></li>
                        <li onClick={setMenu}><Link to={`/contact`}>contact us</Link></li>
                    </ul>
                </div>
                <AiOutlineMenu className="header__icon menu"  onClick={setMenu}/>
                </div>
 
        </header>
    )
}

export default Header
