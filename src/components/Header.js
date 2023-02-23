import '../components/Header.css';
import { Link } from "react-router-dom";
import vector from '../assets/images/vector.png';
import { Apple, GooglePlay } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Technology from './TechnologyPage';
import {useState} from 'react';
const Header =()=>{

    const pages_name= ['PRODUCT', 'TECHNOLOGY', 'APLICATION','RESOURCES']
    const [selectedPageId, setSelectedPageId] = useState(0);
    return(
        <>
            <div className='wrapper '>
                <div className='navbar'>
                    <div className='font-headings page-nav glassmorphism'>
                        <img src={vector} alt="cliste" className="cliste-logo"></img>
                        <Link to ="/"><Button className='nav-buttons'>PRODUCT</Button></Link>
                        <Link to ="/technology"><Button className='nav-buttons'>TECHNOLOGY</Button></Link>
                        <Link to ="/application"><Button className='nav-buttons'>APPLICATION</Button></Link>
                        <Button className='nav-buttons'>RESOURCES</Button>
                    </div>
                    <div className='font-headings icons-nav '>
                        <Button className='nav-buttons-icon glassmorphism'>GET CLISTE</Button>
                        <Button className='nav-buttons-icon glassmorphism'>FAQ</Button>
                        <Button className='nav-buttons-icon app-icons glassmorphism'><Apple size="25px"/></Button>
                        <Button className='nav-buttons-icon app-icons glassmorphism'><GooglePlay size="25px"/></Button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header;