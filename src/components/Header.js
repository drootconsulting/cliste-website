import '../components/Header.css';
import { Link } from "react-router-dom";
import cliste_logo from '../assets/images/vector.png';
import { GooglePlay } from 'react-bootstrap-icons';
import appStore from '../assets/images/app-store.png';
import brandlogomobile from '../assets/images/brandlogomobile.png';
import toggleMenu from '../assets/images/toggle-menu.svg';
import crosstoggleicon from '../assets/images/crosstogglebutton.svg';
import { useState } from 'react';
const Header =({selectedPageIdx})=>{

    const header_pages_name= [
        {
            page_name:'PRODUCT',
            url:"/"
        },
        {
            page_name:'TECHNOLOGY',
            url:"/technology"
        },
        {
            page_name:'APPLICATION',
            url:"/application"
        },
        {
            page_name:'RESOURCES',
            url:"/resources"
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return(
        <>
            <div className='wrapper header-desktop'>
                <div className='navbar-desktop'>
                    <div className='font-headings page-nav glassmorphism'>
                        <img src={cliste_logo} alt="cliste" className="cliste-logo"></img>
                        {
                            header_pages_name.map((page, index)=>{
                                return(
                                    <div key={index}>
                                    {/* <Link to ={page.url}><Button className={selectedPageIdx===index ? 'nav-buttons selected':'nav-buttons'} >{page.page_name}</Button></Link> */}
                                    <Link to ={page.url} className={selectedPageIdx===index ? 'nav-buttons selected':'nav-buttons'} >{page.page_name}
                                    </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='font-headings icons-nav '>
                        <div className='glassmorphism  links' >
                        <Link className={selectedPageIdx===4 ? 'nav-buttons-icon selected':'nav-buttons-icon'}>GET CLISTE</Link>
                        </div>
                        <div className='glassmorphism  links' >
                        <Link className={selectedPageIdx===5 ? 'nav-buttons-icon selected':'nav-buttons-icon'}>FAQ</Link>
                        </div>
                        <div className='glassmorphism  links' >
                        <Link className='nav-buttons-app-icon app-icons '><img src={appStore} alt="app-store" /></Link>
                        </div>
                        <div className='glassmorphism  links'style={{marginRight:"0"}} >
                        <Link className='nav-buttons-app-icon app-icons ' style={{marginRight:"0"}}><GooglePlay size="25px"/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='wrapper-mobile header-mobile'>
                <div className='nav-mobile'>
                <div className='font-headings '>
                        <img src={brandlogomobile} alt="cliste" className="cliste-logo-mobile"></img>
                </div>
                <div className='font-headings'>
                <nav className="navbar">
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon" style={{backgroundImage:isOpen?`url(${crosstoggleicon})` :`url(${toggleMenu})`}}></span>
                    </button>
                    </nav>
                </div>
                </div>
            </div>
            <div className={`collapse navbar-collapse  ${isOpen ? 'show header-mobile' : ''}`}>
                        <ul className="navbar-nav">
                            <li className="nav-item font-headings toggle-nav-links">
                                <Link to="/"className="nav-link" href="#">Products</Link>
                            </li>
                            <li className="nav-item font-headings toggle-nav-links">
                            <Link to="/technology"className="nav-link" href="#">Technology</Link>
                            </li>
                            <li className="nav-item font-headings toggle-nav-links">
                            <Link to="/application"className="nav-link" href="#">Application</Link>
                            </li>
                            <li className="nav-item font-headings toggle-nav-links">
                            <Link to="/resources"className="nav-link" href="#">Resources</Link>
                            </li>
                        </ul>
                    </div>

        </>
    )
}

export default Header;