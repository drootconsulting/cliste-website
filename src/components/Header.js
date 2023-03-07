import '../components/Header.css';
import { Link } from "react-router-dom";
import cliste_logo from '../assets/images/vector.png';
import brandlogomobile from '../assets/images/brandlogomobile.png';
import toggleMenu from '../assets/images/toggle-menu.svg';
import crosstoggleicon from '../assets/images/crosstogglebutton.svg';
import { useState } from 'react';
import cartLogo from '../assets/images/cart.svg';
const Header =({selectedPageIdx})=>{

    const header_pages_name= [
        {
            page_name:'PRODUCT',
            url:"/product"
        },
        // {
        //     page_name:'TECHNOLOGY',
        //     url:"/technology"
        // },
        {
            page_name:'APPLICATION',
            url:"/application"
        },
        // {
        //     page_name:'RESOURCES',
        //     url:"/resources"
        // }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
      <>
        <div className="wrapper header-desktop">
          <div className="navbar-desktop">
            <div className="font-headings page-nav glassmorphism">
                <Link to ="/home">
                <img src={cliste_logo} alt="cliste" className="cliste-logo"></img>
                </Link>
              {header_pages_name.map((page, index) => {
                return (
                  <div key={index}>
                    {/* <Link to ={page.url}><Button className={selectedPageIdx===index ? 'nav-buttons selected':'nav-buttons'} >{page.page_name}</Button></Link> */}
                    <Link
                      to={page.url}
                      className={
                        selectedPageIdx === index
                          ? "nav-buttons selected"
                          : "nav-buttons"
                      }
                    >
                      {page.page_name}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="font-headings icons-nav ">
              <div className="glassmorphism  links">
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

        <div className="wrapper-mobile header-mobile">
          <div className="nav-mobile">
            <div className="font-headings ">
              <img
                src={brandlogomobile}
                alt="cliste"
                className="cliste-logo-mobile"
              ></img>
            </div>
            <div className="font-headings">
              <nav className="navbar">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleNavbar}
                >
                  <span
                    className="navbar-toggler-icon"
                    style={{
                      backgroundImage: isOpen
                        ? `url(${crosstoggleicon})`
                        : `url(${toggleMenu})`,
                    }}
                  ></span>
                </button>
              </nav>
            </div>
          </div>
        </div>
        <div
          className={`collapse navbar-collapse  ${
            isOpen ? "show header-mobile" : ""
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item font-headings toggle-nav-links">
              <Link to="/product" className="nav-link" href="#">
                PRODUCT
              </Link>
            </li>
            <li className="nav-item font-headings toggle-nav-links">
              <Link to="/application" className="nav-link" href="#">
                APPLICATION
              </Link>
            </li>
            <li className="nav-item font-headings toggle-nav-links">
              <Link to="/store" className="nav-link" href="#">
                VISIT STORE
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
}

export default Header;