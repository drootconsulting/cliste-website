import '../components/ProductPage.css';
import Footer from './Footer';
import image1 from '../assets/images/machinelearning1.png';
import KitchenTechnology from './KitchenTechnology';
import { Button } from 'react-bootstrap';
import { Play } from 'react-bootstrap-icons';
import Header from './Header';
import SenseProduct from './SenseProduct';
const ProductPage =()=>{
    
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
        <SenseProduct text={"There’s an app for that"} />
        <div className="mockup-section">
          <div className="font-headings mockup-section-heading">
            Cliste Sense at fleeting glance
          </div>
          <div className="row app-section-image-video">
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
            <div className="app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9">
              <img src={image1} style={{ width: "100%" }} />
              <div className="app-section-download">
                <Button className="mockup-video">
                  <Play height="20" width="20" />
                  <span> See how it works</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="tech-adv-section">
          <div className="font-headings tech-adv-section-heading">
            Technology in Cliste
          </div>
          <div className="desktop-view">
            <div className="row tech-card-detail ">
              <div className="col-xs-12 col-sm-6 col-md-8 col-lg-8 ">
                <div className="card tech-adv-section-text">
                  <img src={image1} className="card-img-top" alt="..." />
                  <div className="card-body tech-adv-text">
                    <h5 className="card-heading font-headings">Card heading</h5>
                    <p
                      className="card-text font-paragraphs"
                      style={{ color: "#363638" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="card tech-adv-section-text">
                  <img src={image1} className="card-img-top" alt="" />
                  <div className="card-body tech-adv-text">
                    <p className="card-heading font-headings">Card heading</p>
                    <p
                      className="card-text font-paragraphs"
                      style={{ color: "#363638" }}
                    >
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="desktop-view">
            <div className="row tech-card-detail ">
              <div className="card  tech-adv-section-text col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
                <img src={image1} className="card-img-top" alt="..." />
                <div className="card-body tech-adv-text">
                  <p className="card-heading font-headings">Card heading</p>
                  <p
                    className="card-text font-paragraphs"
                    style={{ color: "#363638" }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card tech-adv-section-text col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
                <img src={image1} className="card-img-top" alt="..." />
                <div className="card-body tech-adv-text">
                  <p className="card-heading font-headings">Card heading</p>
                  <p
                    className="card-text font-paragraphs"
                    style={{ color: "#363638" }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card tech-adv-section-text col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
                <img src={image1} className="card-img-top" alt="..." />
                <div className="card-body tech-adv-text">
                  <p className="card-heading font-headings">Card heading</p>
                  <p
                    className="card-text font-paragraphs"
                    style={{ color: "#363638" }}
                  >
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='mobile-view'>
                <ControlledCarousel />
                <div className='tech-adv-section-text'>
                <p className='card-heading font-headings'>Card heading</p>
                <p className="card-text font-paragraphs" style={{ color: "#363638" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
               
        </div> */}
        <KitchenTechnology />
        <Footer />
      </>
    );
}

export default ProductPage;