import '../components/ProductPage.css';
import Footer from './Footer';
import image1 from '../assets/images/image.png';
import KitchenTechnology from './KitchenTechnology';
import { Button } from 'react-bootstrap';
import Header from './Header';
import SenseProduct from './SenseProduct';
import cartLogo from '../assets/images/cart.svg';
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
          <div className="row app-section-image-video">
            <div className="app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <img src={image1} style={{ width: "100%" }} />
              <div className="app-section-download">
                <Button className="mockup-video">
                  <img src={cartLogo} alt="cart logo" className='app-section-cart-logo' />
                  <span className="app-section-download-text"> Get Cliste Sense</span>
                </Button>
              </div>
            </div>
            <div className="mockup-section-detail col-xs-12 col-sm-12 col-md-3 col-lg-3">
              <p className="font-paragraphs mockup-section-text">
                Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur Lorem ipsum dolor sit amet,
                consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum
                dolor sit amet, consectetur{" "}
              </p>
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