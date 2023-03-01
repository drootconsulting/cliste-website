import '../components/WaitListPage.css';
import WaitListHeader from '../components/WaitListHeader';
import kitchenimage from '../assets/images/kitchen.svg';
const WaitListPage =()=>{
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
                                Don't settle for a cluttered kitchen and unhealthy food choices - join our waitlist for Cliste Sense and simplify your meal planning and preparation! With smart inventory management, recipe recommendations, diet tracking, and more, Cliste Sense is the must-have product for any smart kitchen. Plus, with its convenient smartphone interface and high-quality design, healthy eating has never been easier or more stylish. So what are you waiting for? Sign up now and get ready to revolutionize your kitchen game!
                            </p>
                            <div className="input-group waitlist-input">
                                <input type="text" className="form-control font-pragraphs get-updates-field-input " placeholder="Enter your email to join waitlist " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="waitlist-input-group-text font-pragraphs" id="basic-addon2">Join now</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-8'>
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
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6' style={{borderRight:"none"}}>
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
                        <div className='app-reason-points-desc col-xs-12 col-sm-12 col-md-6 col-lg-6' style={{borderBottom:"none", borderRight:"none"}}>
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

                    <p className='font-paragraphs waitlist-footer-text'>
                        B-818, Tower B, ITHUM TOWER,<br/>
                        A-40, Block A, Industrial Area,<br/>
                        Sector 62, Noida, Uttar Pradesh 201301
                    </p>
                </div>
            </>
        )
}

export default WaitListPage;