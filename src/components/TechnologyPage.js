import Header from './Header';
import '../components/TechnologyPage.css'
import Footer from './Footer';
import image1 from '../assets/images/machinelearning1.png';
import iot from '../assets/images/iot.png';
import {useState, useEffect} from "react";
import image from '../assets/images/temp-img.jpg';
function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('up');
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = lastScrollY > 2901 ? "down" : "up";
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
const Technology=()=>{
    const scrollDirection = useScrollDirection();
    return(
        <>
        {scrollDirection==='up' && <Header selectedPageIdx={1}/>}
        <div className='content'>
                <div className='row'>
                    <div className='tech-content col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                        <div className="card tech-cards">
                            <img src={image} className="card-img-top" alt="..." style={{borderRadius:'0', height:'34.3rem'}}/>
                            <div className="card-body tech-cards-content">
                                <h5 className="card-title font-headings tech-card-heading">Sensors</h5>
                                <p className="card-text tech-card-text font-pragraphs">Discuss the advanced sensors used in Cliste Sense and how they accurately detect the weight, temperature, and items available in the jar</p>
                            </div>
                        </div>
                    </div>
                    <div className='tech-content col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div className="card tech-cards">
                            <img src={image} className="card-img-top" alt="..." style={{borderRadius:'0', height:'34.3rem'}}/>
                            <div className="card-body tech-cards-content">
                                <h5 className="card-title font-headings tech-card-heading">Connectivity -</h5>
                                <p className="card-text tech-card-text font-pragraphs">Discuss the advanced sensors used in Cliste Sense and how they accurately detect the weight, temperature, and items available in the jar</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='row'>
                    <div className='col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                        <div className='tech-content'>
                            <div className="card tech-cards">
                                <img src={image} className="card-img-top" alt="..." style={{ borderRadius: '0', height: '223px' ,width:"100%"}} />
                                <div className="card-body tech-cards-content">
                                    <h5 className="card-title font-headings tech-card-heading">Application Intelligence</h5>
                                    <p className="card-text tech-card-text font-pragraphs">Describe how Cliste Sense uses artificial intelligence to recommend recipes based on the ingredients you have on hand and track your diet to promote healthier choices.</p>
                                </div>
                            </div>
                            <div className='tech-content'>
                                <div className="card tech-cards">
                                    <img src={image} className="card-img-top" alt="..." style={{ borderRadius: '0', height: '223px' }} />
                                    <div className="card-body tech-cards-content">
                                        <h5 className="card-title font-headings tech-card-heading">Cloud Services</h5>
                                        <p className="card-text tech-card-text font-pragraphs">Highlight how Cliste Sense utilizes cloud services to store and analyze data to provide personalized recommendations and seamless user experience.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tech-content col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div className="card tech-cards">
                            <img src={image} className="card-img-top" alt="..." style={{ borderRadius: '0', height: '100px' }} />
                            <div className="card-body tech-cards-content">
                                <h5 className="card-title font-headings tech-card-heading">User Interface</h5>
                                <p className="card-text tech-card-text font-pragraphs">Showcase the user interface of Cliste Sense and how it displays inventory, recipe recommendations.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='row'>
                    <div className='tech-content col-xs-12 col-sm-12 col-md-8 col-lg-8'>
                        <div className="card  tech-cards">
                            <img src={image}className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-headings tech-card-heading">Future Innovations</h5>
                                <p className="card-text tech-card-text font-pragraphs">Discuss the advanced sensors used in Cliste Sense and how they accurately detect the weight, temperature, and items available in the jar</p>
                            </div>
                        </div>
                    </div>
                    <div className='tech-content col-xs-12 col-sm-12 col-md-4 col-lg-4'>
                        <div className="card  tech-cards">
                            <img src={image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title font-headings tech-card-heading">Security and Privacy</h5>
                                <p className="card-text tech-card-text font-pragraphs">Discuss the measures taken by Cliste to ensure data privacy and device security, providing peace of mind to the users.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='learning-content'>

                    <div className='learn-content'>
                        <div className='font-headings learn-heading'>Machine Learning</div>
                        <p className='font-pragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere urna nec tincidunt praesent. Morbi tristique senectus et netus et. Pharetra vel turpis nunc eget lorem dolor sed. Euismod elementum nisi quis eleifend quam. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. A diam sollicitudin tempor id. Sed arcu non odio euismod lacinia at quis risus. Nibh cras pulvinar mattis nunc sed. In pellentesque massa placerat duis ultricies lacus. Habitant morbi tristique senectus et netus et malesuada. Ipsum dolor sit amet consectetur adipiscing elit</p>
                        <img src={image1} alt="Machine Learning" className='img-fluid'/>
                    </div>

                    <div className='learn-content'>
                    <div className='font-headings learn-heading'>IoT artificial intelligence electrical engineering</div>
                        <p className='font-pragraphs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere urna nec tincidunt praesent. Morbi tristique senectus et netus et. Pharetra vel turpis nunc eget lorem dolor sed. Euismod elementum nisi quis eleifend quam. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed. A diam sollicitudin tempor id. Sed arcu non odio euismod lacinia at quis risus. Nibh cras pulvinar mattis nunc sed. In pellentesque massa placerat duis ultricies lacus. Habitant morbi tristique senectus et netus et malesuada. Ipsum dolor sit amet consectetur adipiscing elit</p>
                        <img src={iot} alt="IOT " className='img-fluid'/>
                    </div>

                </div>
        </div>
        <Footer/>
        </>
    )
}

export default Technology;