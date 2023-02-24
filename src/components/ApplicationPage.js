import '../components/ApplicationPage.css';
import Header from './Header';
import Footer from './Footer';
import SenseProduct from './SenseProduct';
import {useState, useEffect} from "react";
import image from '../assets/images/temp-img.jpg';
function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState('up');
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        console.log(scrollY)
        const direction = lastScrollY > 3200 ? "down" : "up";
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
const ApplicationPage =()=>{
    const scrollDirection = useScrollDirection();
    return(
        <>
         {scrollDirection==='up' && <Header selectedPageIdx={2}/>}

        <div className='content app-feature-content'>

            <img src={image} style={{width:"100%", height:"43.8rem"}}></img>
            <div className='app-features'>
                <div className='row'>
                <div className='features-left-aligned col-lg-6'>
                    <div className='font-headings '>
                        <p className='font-paragraphs app-features-text'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.</p>
                    </div>
                    <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='features-right-aligned col-lg-6'>
                <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image}className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col feature-content">
                            <div className="card feature-card">
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body feature-content-card">
                                    <h5 className="card-title feature-card-title">Feature 2 - Recipe</h5>
                                    <p className="card-text font-paragraphs feature-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem fringilla ut morbi tincidunt augue. Ac feugiat sed lectus vestibulum. Gravida quis blandit turpis cursus in. In fermentum posuere.</p>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>

        </div>
        <SenseProduct text={"Cliste Sense product"}/>
        <Footer/>
        </>
    )

}


export default ApplicationPage