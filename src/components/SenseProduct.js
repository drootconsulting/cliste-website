import '../components/SenseProduct.css';
import clistemobileapp from '../assets/images/clistemobileapp.png';
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';
import ControlledCarousel from './CarousalComponent';
import { Button } from 'react-bootstrap';
const SenseProduct=({text})=>{
        return(

            <div className='app-section'>
                <div className='font-headings app-section-heading'>{text}</div>
                <div className='font-headings app-section-sub-heading'>Track your kitchen food items with cliste Sense</div>
                <p className='font-pragraphs app-section-text desktop-view'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
                <div className='row app-section-image-video'>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 desktop-view mobile-app-image'>
                        <img src={clistemobileapp} alt="cliste-mobile-app" />
                    </div>
                    <div className='app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                    <ControlledCarousel/>
                        <p className='font-pragraphs app-section-text mobile-view'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        </p>
                        <div className='app-section-download'>
                            <Button className='play-store-btn'>
                            <img src={googleplay} alt="Google Play Store"/>
                            </Button>
                            <Button className='play-store-btn'>
                                <img src={appstore} alt="App Store"/>
                                </Button>
                        </div>

                    </div>
                </div>
            </div>
        )
}

export default SenseProduct;