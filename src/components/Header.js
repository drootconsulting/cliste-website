import '../components/Header.css';
import { Link } from "react-router-dom";
import vector from '../assets/images/vector.png';
import AppleIcon from '@mui/icons-material/Apple';
import Button from 'react-bootstrap/Button';
import playstore from '../assets/images/playstore.png';
import appleicon from '../assets/images/appleicon.png';
const Header =()=>{
    return(
        <>
            <div className='wrapper'>
                <div className='navbar'>
                    <div className='font-headings page-nav'>
                        <img src={vector} alt="cliste" className="cliste-logo"></img>
                        <Button className='nav-buttons'>PRODUCT</Button>
                        <Button className='nav-buttons'>TECHNOLOGY</Button>
                        <Button className='nav-buttons'>APPLICATION</Button>
                        <Button className='nav-buttons'>RESOURCES</Button>
                    </div>
                    <div className='font-headings icons-nav'>
                        <Button className='nav-buttons-icon'>GET CLISTE</Button>
                        <Button className='nav-buttons-icon'>FAQ</Button>
                        <Button className='nav-buttons-icon'><img src={appleicon} alt="apple store" ></img></Button>
                        <Button className='nav-buttons-icon'><img src={playstore} alt="play store" ></img></Button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header;