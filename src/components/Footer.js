import '../components/Footer.css';
import { Link } from "react-router-dom";
import { Apple, GooglePlay } from 'react-bootstrap-icons';
import appStore from '../assets/images/app-store-2.png';
import linkedInLogo from '../assets/images/linkedIn.svg';
import InstaLogo from '../assets/images/insta.svg';
import facebookLogo from '../assets/images/facebook.png';
import twitterLogo from '../assets/images/twitter.svg';

const Footer =()=>{
    return(

        <div className='footer'>
            <div className='footer-heading font-headings'>
                Get Cliste updates.
            </div>
            <p className='font-paragraphs footer-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore <br />magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div className="input-group get-updates-field">
                <form className='footer-form'>
                    <input
                        type="email"
                        className="form-control font-paragraphs get-updates-field-input-footer"
                        placeholder="@Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <button
                        className="footer-submit-btn font-paragraphs"
                        id="basic-addon2"
                        type="submit"
                    >Thank you</button>
                </form>
                
            </div>
            <div className='row'>
                <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 font-headings footer-nav-links'>
                    <Link to ="/" >Product</Link>
                    <Link to ="/" >Technology</Link>
                    <Link to ="/" >Application</Link>
                    <Link to ="/" >Resources</Link>
                    <Link to ="/" >Get Cliste Sense</Link>
                </div>

                <div  className='col-xs-12 col-sm-12 col-md-3 col-lg-3 footer-nav-links font-headings'>
                    <Link to="/" >FAQs</Link>
                    <Link to="/" >Blogs </Link>
                    <Link to="/" >Partner with us</Link>
                    <Link to="/" >Careers</Link>
                    <Link to="/" >Legal overview</Link>
                    <Link to="/privacypolicy" >Privacy Policy</Link>
                    <Link to="/" >Terms & conditions</Link>
                    <Link to="/" >Order tracker</Link>
                    <Link to="/" >Shipping, cancellation & return</Link>
                    <Link to="/contact" >Contact us</Link>
                </div>

                <div  className='col-xs-12 col-sm-12 col-md-3 col-lg-3 footer-download-app-links footer-nav-links'>
                    <div className='download-links'>
                        <Link to={{ pathname: "/" }} target="_blank" className='font-headings app-download-links'>Get App</Link>
                        {/* <Apple className='app-download-links'/> */}
                        <img src={appStore} className='app-download-links'/>
                        <GooglePlay className='app-download-links'/>
                    </div>
                        <p className='font-paragraphs footer-text desktop-view'>
                        Seamless mobile experiences <br/>has been curated to make sure <br/>the platform is accessible and <br/>easy to navigate for all users
                        </p>
                </div>

                <div  className='col-xs-12 col-sm-12 col-md-3 col-lg-3 contact-section'>
                        <p className='font-headings contact-section-heading'>
                        Contact us
                        </p>
                        <p className='font-paragraphs contact-text' style={{marginBottom:"0"}}>
                        +91 96674 07566
                        </p>
                        <p className='font-paragraphs contact-text'>product@cliste.com</p>
                        <p className='font-paragraphs contact-text'>B-818, Tower B, ITHUM TOWER,<br/> A-40, Block A, Industrial Area, <br/>Sector 62, Noida, Uttar Pradesh 201301</p>
                        <div>
                            <Link to=""><img src={linkedInLogo} alt="linkedIn" className='social-media-links'/></Link>
                            <Link to=""><img src={InstaLogo} alt="linkedIn" className='social-media-links'/></Link>
                            <Link to=""><img src={facebookLogo} alt="linkedIn" className='social-media-links'/></Link>
                            <Link to=""><img src={twitterLogo} alt="linkedIn" className='social-media-links'/></Link>
                        </div>
                </div>

            </div>
            <p className='font-headings footer-copyright'>@2023 Cliste</p>
        </div>
    )

}

export default Footer;