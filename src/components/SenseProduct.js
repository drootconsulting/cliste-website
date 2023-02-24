import '../components/SenseProduct.css';
import { Button } from 'react-bootstrap';
import clistemobileapp from '../assets/images/clistemobileapp.png';
import appstore from '../assets/images/appstore.png';
import googleplay from '../assets/images/googleplay.png';
import image1 from '../assets/images/temp-img.jpg';
const SenseProduct=({text})=>{
        return(

            <div className='app-section'>
                <div className='font-headings app-section-heading'>{text}</div>
                <div className='font-headings app-section-sub-heading'>Track your kitchen food items with cliste Sense</div>
                <p className='font-pragraphs app-section-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
                <div className='row app-section-image-video'>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                        <img src={clistemobileapp} alt="cliste-mobile-app" />
                    </div>
                    <div className='app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                        <img src={image1} style={{width:'100%'}}/>
                        <div className='app-section-download'>
                            <Button className='play-store-btn'>
                            <img src={googleplay} alt="Google Play Store"/>
                            </Button>
                            <Button className='play-store-btn'><img src={appstore} alt="App Store"/></Button>
                        </div>

                    </div>
                </div>
            </div>
        )
}

export default SenseProduct;