import '../components/WaitListHeader.css';
import brandLogoWhite from '../assets/images/brandLogoWhite.svg';
import linkedInLogo from '../assets/images/linkedIn.svg';
import InstaLogo from '../assets/images/insta.svg';
import facebookLogo from '../assets/images/facebook.png';
import twitterLogo from '../assets/images/twitter.svg';

const WaitListHeader = ()=>{

    return (
        <>
            <div className='waitlist-header'>
                <div className='waitlist-header-navbar'>
                    <div className='waitlist-brand-logo'>
                        <img src={brandLogoWhite} alt="cliste" />
                    </div>
                    {/* <div className='waitlist-desktop-view'>
                    <div className='waitlist-social-media-links '>
                        <p className='font-headings'>Follow us on</p>
                        <img src={linkedInLogo} alt="linkedIn" />
                        <img src={InstaLogo} alt="Instagram"/>
                        <img src={facebookLogo} alt="Facebook" />
                        <img src={twitterLogo} alt="Twitter" style={{marginRight:"0"}}/>
                    </div>
                </div> */}
                </div>
            </div>
        </>
    ) 
}

export default WaitListHeader;