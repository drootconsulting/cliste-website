import '../components/ApplicationPage.css';
import Header from './Header';
import Footer from './Footer';
import image from '../assets/images/temp-img.jpg';
import clistemobileapp from '../assets/images/clistemobileapp.png';
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';
import { Link } from 'react-router-dom';
import KitchenTechnology from './KitchenTechnology';
const ApplicationPage = () => {
    return (
        <>
            <Header selectedPageIdx={1} />
                <div className='content apply-mobile-image-div1 '>
                    <h2 className='font-headings apply-section-heading'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h2>
                </div>
                <div className='apply-mobile-image-div2 '>
                    <img src={clistemobileapp} alt="image" className='img-fluid apply-mobile-image-div2-img'>
                    </img>
                    <div className='apply-app-download'>
                        <Link to="/"  style={{marginRight:"32px"}}>
                            <img src={googleplay} alt="Google Play Store" className='img-fluid' />
                            </Link>
                        <Link to="/">
                            <img src={appstore} alt="App Store" className="img-fluid" />
                        </Link>
                    </div>
                </div>
                <div className='app-features'>
                    <div className='row'>
                        <div className='features-left-aligned col-sm-6'>
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
                        <div className='features-right-aligned col-sm-6'>
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
            <KitchenTechnology/>
            <Footer />
        </>
    )

}


export default ApplicationPage