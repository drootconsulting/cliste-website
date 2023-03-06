import '../components/Navbar.css';
import { Link } from "react-router-dom";
import cliste_logo from '../assets/images/brandLogo.svg';
import brandlogomobile from '../assets/images/brandlogomobile.png';
import toggleMenu from '../assets/images/toggle-menu.svg';
import crosstoggleicon from '../assets/images/crosstogglebutton.svg';
import { useState } from 'react';
import cartLogo from '../assets/images/cart.svg';
const Navbar =({selectedPageIdx})=>{

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
            <div className='wrapper '>
                <div className='navbar-desktop'>
                    <div className='font-headings page-nav'>
                        <img src={cliste_logo} alt="cliste" className="cliste-logo"></img>
                    </div>
                    <div className='font-headings icons-nav '>
                        <div className='glassmorphism  links' >
                        <Link className={selectedPageIdx===4 ? 'nav-buttons-icon selected':'nav-buttons-icon'}>
                            <p className='font-headings'>
                            Visit Store
                            </p>
                            <img src={cartLogo} alt="cart logo"/>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;