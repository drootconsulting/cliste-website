import '../components/ProductPage.css';
import Footer from './Footer';
import image1 from '../assets/images/image.png';
import KitchenTechnology from './KitchenTechnology';
import { Button } from 'react-bootstrap';
import Header from './Header';
import SenseProduct from './SenseProduct';
import shoppingcartLogo from '../assets/images/shoppingcart.svg';
import colofilter from '../assets/images/colorfilter.svg';
import backwarditem from '../assets/images/backwarditem.svg';
import bubble from '../assets/images/bubble.svg';
import shuttlstock from '../assets/images/shutterstock.svg';
import notepad from '../assets/images/notepad2.svg';
const ProductPage = () => {

  return (
    <>
      <Header selectedPageIdx={0} />

      <div className="content">
        <div className="intro">
          <div className="hero-image">
            <img
              src={image1}
              className="img-fluid"
              alt="hero image"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="working">
        <div className="font-headings working-heading">What it does</div>
        <div className="row card-detail">
          <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3 font-paragraphs working-card">
            <img src={image1} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-heading">Card heading</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3 font-paragraphs working-card">
            <img src={image1} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-heading">Card heading</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3 font-paragraphs working-card">
            <img src={image1} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-heading">Card heading</p>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#315C66" }}>
        <SenseProduct text={"There’s an app for that"} />
        <div className="mockup-section">
          <div className="font-headings mockup-section-heading">
            Cliste Sense at fleeting glance
          </div>
          <div className='font-headings mockup-section-sub-heading'>Automate your kitchen food items with cliste sense</div>
            <p className='font-paragraphs mockup-section-sub-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            </p>
          <div className="row app-section-image-video">
            <div className="mockup-section-detail col-xs-12 col-sm-12 col-md-4 col-lg-3">
              <ul style={{listStyle:"none", padding:0}} className='mockup-section-ul'>
                <li  className='mockup-section-list-item'>
                <img src={colofilter} alt="image" />
              <p className="font-paragraphs mockup-section-text" >
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              </p>
                </li>
                <li className='mockup-section-list-item'>
                <img src={backwarditem} alt="image"/>
              <p className="font-paragraphs mockup-section-text" >
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              </p>
                </li>
                <li className='mockup-section-list-item'>
                <img src={bubble} alt="image"/>
              <p className="font-paragraphs mockup-section-text" >
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              </p>
                </li>
                <li className='mockup-section-list-item' >
                <img src={shuttlstock} alt="image"/>
              <p className="font-paragraphs mockup-section-text" >
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              </p>
                </li>
                <li className='mockup-section-list-item'>
                <img src={notepad} alt="image"/>
              <p className="font-paragraphs mockup-section-text" >
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              </p>
                </li>
              </ul>
              <div className="mockup-section-download mobile-view">
                <Button className="mockup-video">
                  <img src={shoppingcartLogo} alt="cart logo" className='app-section-cart-logo' />
                  <span className="mockup-section-download-text"> Get Cliste Sense</span>
                </Button>
              </div>
            </div>
           
            <div className="mockup-section-video col-xs-12 col-sm-12 col-md-8 col-lg-9">
              <img src={image1} style={{ width: "100%" }} />
              <div className="mockup-section-download desktop-view">
                <Button className="mockup-video">
                  <img src={shoppingcartLogo} alt="cart logo" className='app-section-cart-logo' />
                  <span className="mockup-section-download-text"> Get Cliste Sense</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <KitchenTechnology />
      <Footer />
    </>
  );
}

export default ProductPage;