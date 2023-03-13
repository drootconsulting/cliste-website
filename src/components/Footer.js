import '../components/Footer.css';
import { Link } from "react-router-dom";
import { ArrowRight} from 'react-bootstrap-icons';
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';
import linkedInLogo from '../assets/images/linkedIn.svg';
import InstaLogo from '../assets/images/insta.svg';
import facebookLogo from '../assets/images/facebook.png';
import twitterLogo from '../assets/images/twitter.svg';
const Footer =()=>{
    return (
      <div className="footer">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 font-headings footer-nav-links">
            <h6 className="font-headings footer-heading">
              Go to <ArrowRight className="right-arrow-icon" />
            </h6>
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 footer-go-to-links">
                <p className="font-headings">
                  <Link to="/prouct">Product</Link>
                </p>
                <p className="font-headings">
                  <Link to="/application">Application</Link>
                </p>
                <p className="font-headings">
                  <Link to="/store">Visit store</Link>
                </p>
                <p className="font-headings">
                  <Link to="/">FAQs</Link>
                </p>
                <p className="font-headings">
                  <Link to="/">Blogs </Link>
                </p>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 footer-go-to-links">
                <p className="font-headings">
                  <Link to="/">Data Protection & Privacy Policy </Link>
                </p>
                <p className="font-headings">
                  <Link to="/">Terms & Conditions</Link>
                </p>
                <p className="font-headings">
                  <Link to="/">Contact us</Link>
                </p>
                <p className="font-headings">
                  <Link to="/">Partner with us</Link>
                </p>
                <p className="font-headings">
                  <Link to="/">Careers</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-4 footer-nav-links font-headings footer-go-to-links footer-social">
            <h6 className="font-headings footer-heading">Get Cliste app</h6>
            <p className="font-paragraphs contact-text ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="footer-section-app-download">
              <Link to="/" className="footer-section-download-image">
                <img
                  src={googleplay}
                  alt="Google Play Store"
                  className="img-fluid "
                />
              </Link>
              <Link to="/" className="footer-section-download-image ">
                <img src={appstore} alt="App Store" className="img-fluid" />
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 contact-section footer-contact">
            <h6 className="footer-heading font-headings">
              Get Cliste updates.
            </h6>
            <div className="input-group get-updates-field">
              <form className="footer-form">
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
                >
                  Thank you
                </button>
              </form>
            </div>
            <div className="footer-section-social-media-links">
              <h6 className="footer-heading font-headings">Follow us on</h6>
              <img src={linkedInLogo} alt="linkedIn" />
              <img src={InstaLogo} alt="Instagram" />
              <img src={facebookLogo} alt="Facebook" />
              <img
                src={twitterLogo}
                alt="Twitter"
                style={{ marginRight: "0" }}
              />
            </div>
          </div>
        </div>
        <p className="font-headings footer-copyright">@2023 Cliste</p>
      </div>
    );

}

export default Footer;