import Header from '../components/Header';
import '../components/LandingPage.css';
import { Button } from 'react-bootstrap';
import { Telephone, Cart,Play } from 'react-bootstrap-icons';
import clistemobileapp from '../assets/images/clistemobileapp.png';
import Partners from './Partners';
const LandingPage =()=>{

    return (
        <>
        <Header />
            <div className='wrapper'>
                <div className='row intro'>
                    <div className='font-headings col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                        <div className='heading'>
                            Cliste is <span style={{ color: "#F11E1E" }}>Innovating.</span>
                        </div>
                        <p className='font-pragraphs text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button className='intro-btn font-pragraphs'><Telephone className='telephone-icon font-pragraphs' /><span>Request a call</span></Button>
                        <Button className='intro-btn font-pragraphs'><Cart className='telephone-icon font-pragraphs' /><span>Buy now</span></Button>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6' style={{ height: "34rem", width: "38.7rem", backgroundColor: "#fff" }}>
                        <p>image section</p>
                    </div>
                </div>
            </div> 
            <div className="working">
                <div className='font-headings working-heading'>What it does</div>
                <div className='row card-detail'>
                <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" style={{ width: "18rem",marginRight:"" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className='card-heading'>Card heading</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div> <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className='card-heading'>Card heading</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" style={{ width: "18rem" }}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                    <p className='card-heading'>Card heading</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div> 
            </div> 

            <div className='app-section'>
                <div className='font-headings app-section-heading'>There’s an app for that</div>
                <div className='font-headings app-section-sub-heading'>Track your kitchen food items with cliste Sense</div>
                <p className='font-pragraphs app-section-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                </p>
                <div className='row app-section-image-video'>
                    <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                        <img src={clistemobileapp} alt="cliste-mobile-app" />
                    </div>
                    <div className='app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                        <div className=' video-section'>

                        </div>
                        <div className='app-section-download'>
                            <Button>
                                get it on google play
                            </Button>
                            <Button>download on the app store</Button>
                        </div>

                    </div>
                </div>
            </div>
            <div className='mockup-section'>
                <div className='font-headings mockup-section-heading'>Cliste Sense at fleeting glance</div>
                <div className='row app-section-image-video'>
                    <div className='mockup-section-detail col-xs-12 col-sm-12 col-md-3 col-lg-3'>
                        <p className='font-pragraphs mockup-section-text'>Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
                    </div>
                    <div className='app-section-video col-xs-12 col-sm-12 col-md-9 col-lg-9'>
                        <div className=' video-section'>

                        </div>
                        <div className='app-section-download'>
                            <Button className='mockup-video'>
                                <Play height="20" width="20"/>
                               <span> See how it works</span>
                            </Button>

                        </div>

                    </div>
                </div>
            </div>

            <div className="tech-adv-section">
                <div className='font-headings tech-adv-section-heading'>Technological Advancement in IOT space <br />in context of automated Kitchen (Blogs)</div>
                <div className='row card-detail'>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-6 col-md-8 col-lg-8 font-pragraphs" >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-6 col-md-4 col-lg-4 font-pragraphs" >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='row card-detail'>
                    <div className="card  tech-adv-section-text col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text " style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card tech-adv-section-text col-xs-12 col-sm-12 col-md-4 col-lg-4 font-pragraphs" >
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className='card-heading'>Card heading</p>
                            <p className="card-text" style={{color:"#363638"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* partners */}
                    <Partners/>
            </div> 
        </>
    )
}

export default LandingPage;