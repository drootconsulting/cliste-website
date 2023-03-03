import '../components/WaitListPage.css';
import WaitListHeader from '../components/WaitListHeader';
import kitchenimage from '../assets/images/kitchen.png';
import linkedInLogo from '../assets/images/linkedIn.svg';
import InstaLogo from '../assets/images/insta.svg';
import facebookLogo from '../assets/images/facebook.png';
import twitterLogo from '../assets/images/twitter.svg';
import { useState } from 'react';
const WaitListPage =()=>{
    const [email, setEmail] = useState("");
    const [buttonColor, setButtonColor] = useState("rgba(249, 70, 28, 0.5)");
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      if (isValidEmail(event.target.value)) {
        setButtonColor("#F9461C");
      } else {
        setButtonColor("rgba(249, 70, 28, 0.5)");
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission here
    };
  
    const isValidEmail = (email) => {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
        return(
            <>
                <div className='waitlist-body'>
                    <WaitListHeader />
                    <div className=' row waitlist-intro'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
                            <p className='font-headings waitlist-title'>
                                Cliste Sense </p>
                            <p className='font-headings waitlist-sub-title'>Coming soon !</p>
                            <p className='font-paragraphs waitlist-text'>
                            Don't settle for a cluttered kitchen and unhealthy food choices - join our waitlist for Cliste Sense and simplify your meal planning and preparation! With smart inventory management, recipe recommendations, diet tracking, and more,
                            </p>
                            <div className="input-group waitlist-input">
                                <form onSubmit={handleSubmit} className='waitlist-form'>
                                <input 
                                type="email" 
                                className="form-control font-paragraphs get-updates-field-input-waitlist " 
                                placeholder="Enter your email to join waitlist " 
                                aria-label="Recipient's username" 
                                aria-describedby="basic-addon2" 
                                value={email}
                                onChange={handleEmailChange}
                                />
                                {/* <div className="input-group-append"> */}
                                    <button 
                                    className="waitlist-submit-btn font-paragraphs" 
                                    id="basic-addon2"
                                    type="submit"
                                    style={{backgroundColor:buttonColor}}
                                    >Join{" "}now</button>
                                {/* </div> */}
                                </form>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-8 waitlist-kitchen-image'>
                            <img src={kitchenimage} alt="kitchen"/>
                        </div>
                    </div>
                </div>
                <div className='app-reason-content'>
                    <div className='app-reason-text'>
                    <h5 className='font-headings app-reason-title'>WHY CLISTE SENSE ?</h5>
                    <div className='row app-reason-points'>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                            <h1 className='app-reason-points-desc-number'>01</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Lorem ipsum dolor sit amet,
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6 app-reason-point-two' style={{borderRight:"none"}}>
                            <h1 className='app-reason-points-desc-number'>02</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Lorem ipsum dolor sit amet,
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                           
                        </div>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6' style={{borderBottom:"none"}}>
                            <h1 className='app-reason-points-desc-number'>03</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Lorem ipsum dolor sit amet,
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6 app-reason-point-two' style={{borderBottom:"none", borderRight:"none"}}>
                            <h1 className='app-reason-points-desc-number'>04</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Lorem ipsum dolor sit amet,
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='waitlist-footer'>
                    <div className='waitlist-social-media-links'>
                        <img src={linkedInLogo} alt="linkedIn" />
                        <img src={InstaLogo} alt="Instagram"/>
                        <img src={facebookLogo} alt="Facebook" />
                        <img src={twitterLogo} alt="Twitter" style={{marginRight:"0"}}/>
                    </div>
                </div>
            </>
        )
}

export default WaitListPage;