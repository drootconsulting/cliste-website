// import Navbar from '../components/Navbar';
import '../components/LandingPage.css';
import { Button } from 'react-bootstrap';
import Partners from './Partners';
import Footer from './Footer';
import heroimage from '../assets/images/heroimage1.png';
import KitchenTechnology from './KitchenTechnology';
import Team from './Team';
import Technology from './TechnologyPage';
import Header from './Header';
import SenseProduct from './SenseProduct';
const LandingPage = () => {

  return (
    <>
      <Header />

      <div className="content desktop-view">
        <div className="row intro">
          <div className="font-headings col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="heading ">
              Cliste is <span style={{ color: "#F11E1E" }}>Innovating.</span>
            </div>
            <p className="font-paragraphs text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="intro-btn font-paragraphs">
              View Products
            </Button>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hero-image">
            <img src={heroimage} className="img-fluid" alt="hero image" />
          </div>
        </div>
      </div>

      <div className="content mobile-view">
        <div className="row intro">
          <div className="font-headings col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hero-image">
              <img src={heroimage} className="img-fluid" alt="" />
            </div>
            <div className="heading ">
              Cliste is <span style={{ color: "#F11E1E" }}>Innovating.</span>
            </div>
            <p className="font-paragraphs text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="intro-btn font-paragraphs">
              View Products
            </Button>
          </div>
        </div>
      </div>
      <SenseProduct text={"There’s an app for that"} />
      <Team />
      <Technology />
      <Partners />
      <KitchenTechnology />
      <Footer />
    </>
  );
}

export default LandingPage;