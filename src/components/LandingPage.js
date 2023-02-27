import Header from '../components/Header';
import '../components/LandingPage.css';
import { Button } from 'react-bootstrap';
import { Telephone, Cart,Play } from 'react-bootstrap-icons';
import Partners from './Partners';
import Footer from './Footer';
import SenseProduct from './SenseProduct';
import image1 from '../assets/images/temp-img.jpg';
import {useState, useEffect} from "react";
import ControlledCarousel from './CarousalComponent';
function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('up');
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = lastScrollY > 4300 ? "down" : "up";
        if (direction !== scrollDirection) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection);
      return () => {
        window.removeEventListener("scroll", updateScrollDirection);
      };
    }, [scrollDirection]);
  
    return scrollDirection;
  }
  
const LandingPage =()=>{
    const scrollDirection = useScrollDirection();
    return (
        <>
        {scrollDirection==='up' && <Header selectedPageIdx={0}/>}
        
            <div className='content'>
                <div className='row intro'>
                    <div className='font-headings col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='heading desktop-view'>
                            Cliste is <span style={{ color: "#F11E1E" }}>Innovating.</span>
                        </div>
                        <p className='font-pragraphs text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button className='intro-btn font-pragraphs'><Telephone className='telephone-icon font-pragraphs' /><span>Request a call</span></Button>
                        <Button className='intro-btn font-pragraphs'><Cart className='telephone-icon font-pragraphs' /><span>Buy now</span></Button>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 hero-image'>
                        <img src={image1} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div> 
            <div className="working">
                <div className='font-headings working-heading'>What it does</div>
                <div className='row card-detail'>
                <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs working-card" >
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <p className='card-heading'>Card heading</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> 
                <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs working-card" >
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <p className='card-heading'>Card heading</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> 
                <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs working-card" >
                    <img src={image1} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <p className='card-heading'>Card heading</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> 
            </div> 
            </div> 
            <SenseProduct text={"There’s an app for that"}/>
            <div className='mockup-section'>
                <div className='font-headings mockup-section-heading'>Cliste Sense at fleeting glance</div>
                <div className='row app-section-image-video'>
                    <div className='mockup-section-detail col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                        <p className='font-pragraphs mockup-section-text'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                    <div className='app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                        <img src={image1} style={{width:"100%"}}/>
                        <div className='app-section-download'>
                            <Button className='mockup-video'>
                                <Play height="20" width="20"/>
                               <span> See how it works</span>
                            </Button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="tech-adv-section">
                <div className='font-headings tech-adv-section-heading'>Technological Advancement in IOT space <br />in context of automated Kitchen (Blogs)</div>
                <div className='row tech-card-detail desktop-view'>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-6 col-md-8 col-lg-8 font-pragraphs" >
                        <img src={image1} className="card-img-top" alt="..." style={{width:'100%', height:'50%', borderRadius:"0"}}/>
                        <div className="card-body tech-adv-text">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-6 col-md-4 col-lg-4 font-pragraphs" >
                        <img src={image1} className="card-img-top" alt="" style={{ borderRadius:"0"}}/>
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='row tech-card-detail desktop-view'>
                    <div className="card  tech-adv-section-text col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" >
                        <img src={image1} className="card-img-top" alt="..." style={{ borderRadius:"0"}}/>
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text " style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" >
                        <img src={image1} className="card-img-top" alt="..." style={{ borderRadius:"0"}}/>
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" >
                        <img src={image1}className="card-img-top" alt="..." style={{ borderRadius:"0"}}/>
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div>
                <ControlledCarousel className="mobile-view"/>
                <div className='tech-adv-section-text'>
                <p className='card-heading font-headings'>Card heading</p>
                <p className="card-text font-paragraphs" style={{ color: "#363638" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
               
                </div>
                {/* partners */}
                    <Partners/>
            </div> 
            <Footer/>
        </>
    )
}

export default LandingPage;