import '../components/Header.css';
import { Link } from "react-router-dom";
import cliste_logo from '../assets/images/vector.png';
import { Apple, GooglePlay } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
const Header =({selectedPageIdx})=>{

    const header_pages_name= [
        {
            page_name:'PRODUCT',
            url:"/"
        },
        {
            page_name:'TECHNOLOGY',
            url:"/technology"
        },
        {
            page_name:'APPLICATION',
            url:"/application"
        },
        {
            page_name:'RESOURCES',
            url:"/resources"
        }
    ]
    return(
        <>
            <div className='wrapper '>
                <div className='navbar'>
                    <div className='font-headings page-nav glassmorphism'>
                        <img src={cliste_logo} alt="cliste" className="cliste-logo"></img>
                        {
                            header_pages_name.map((page, index)=>{
                                return(
                                    <Link to ={page.url}><Button className={selectedPageIdx===index ? 'nav-buttons selected':'nav-buttons'} key={index}>{page.page_name}</Button></Link>
                                )
                            })
                        }
                    </div>
                    <div className='font-headings icons-nav '>
                        <div className='glassmorphism  links' >
                        <Button className=' nav-buttons-icon'>GET CLISTE</Button>
                        </div>
                        <div className='glassmorphism  links' >
                        <Button className='nav-buttons-icon '>FAQ</Button>
                        </div>
                        <div className='glassmorphism  links' >
                        <Button className='nav-buttons-app-icon app-icons '><Apple size="25px"/></Button>
                        </div>
                        <div className='glassmorphism  links'style={{marginRight:"0"}} >
                        <Button className='nav-buttons-app-icon app-icons ' style={{marginRight:"0"}}><GooglePlay size="25px"/></Button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Header;