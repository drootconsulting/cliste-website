import '../components/WaitListPage.css';
import WaitListHeader from '../components/WaitListHeader';
import kitchenimage from '../assets/images/kitchen.png';
import linkedInLogo from '../assets/images/linkedIn.svg';
import InstaLogo from '../assets/images/insta.svg';
import facebookLogo from '../assets/images/facebook.png';
import twitterLogo from '../assets/images/twitter.svg';
import JoinWaitlistForm from './JoinWaitListForm';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const WaitListPage =()=>{
    const postUrl="https://droot.us18.list-manage.com/subscribe/post?u=0736c2c9dbd48bfdc69b8d88f&id=61d41d7035"
        return(
            <>
                <div className='waitlist-body'>
                    <WaitListHeader />
                    <div className=' row waitlist-intro'>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4'>
                            <p className='font-headings waitlist-title'>
                                Cliste</p>
                            <p className='font-headings waitlist-sub-title'>Coming soon !</p>
                            <p className='font-paragraphs waitlist-text'>
                            Welcome to Cliste, A home of smart home automation and kitchen management that’ll make you feel like a Michelin-starred chef. But don't worry, you don't need a French accent to use our products, just a smartphone and a sense of humor. </p>
                            <p className='font-paragraphs waitlist-text' style={{fontSize:"18px"}}>Join our waitlist now for exclusive updates and early access...!</p>
                          
                            <MailchimpSubscribe
                                url={postUrl}
                                render={({ subscribe, status, message }) => (
                                    <JoinWaitlistForm
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                    />
                                )}
                            />

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
                            Smart Home Automation
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>The range of our home automation products simply and efficiently enables you to remotely manage your home with ease, even when you are away from your abode.</p>
                            </div>
                        </div>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6 app-reason-point-two' style={{borderRight:"none"}}>
                            <h1 className='app-reason-points-desc-number'>02</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Energy Efficient
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>By keeping our customer's comfort and convenience in mind, our products are designed to save energy and lessen the carbon footprint.</p>
                            </div>
                        </div>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6' style={{borderBottom:"none"}}>
                            <h1 className='app-reason-points-desc-number'>03</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Security
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>We prioritize the privacy and security of our customer's personal information, by implementing comprehensive measures to safeguard data.
                            </p>
                            </div>
                        </div>
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6 app-reason-point-two' style={{borderBottom:"none", borderRight:"none"}}>
                            <h1 className='app-reason-points-desc-number'>04</h1>
                            <div className='app-reason-points-desc-detail'>
                            <p className='font-headings app-reason-points-title1'>
                            Easy Installation
                            </p>
                            <p className='font-paragraphs app-reason-points-title2'>Our products are designed while keeping user-friendliness in mind, providing you with an intuitive and hassle-free installation and setup experience for your easy home automation experience.</p>
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