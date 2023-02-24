import Header from "./Header";
import '../components/ResourcesPage.css';
import Partners from "./Partners";
import Footer from "./Footer";
import SenseProduct from "./SenseProduct";
import { teams_data_1, teams_data_2 } from "../data";
import image1 from '../assets/images/group12.png';


const ResourcesPage = () => {
    return (
        <>
            <Header selectedPageIdx={3}/>
            <div className="content">
                <div className="row">
                    <div className="col-lg-6 story-content">
                        <h2 className="font-headings story-content-title">Our Cliste Sense story</h2>
                        <p className="font-paragraphs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus. Ullamcorper velit sed ullamcorper morbi tincidunt. Ac placerat vestibulum lectus mauris. Netus et malesuada fames ac. In dictum non consectetur a. Et sollicitudin ac orci phasellus egestas tellus rutrum. Eget lorem dolor sed viverra ipsum nunc. Odio ut sem nulla pharetra. Varius duis at consectetur lorem donec massa sapien. Et molestie ac feugiat sed. Eget nullam non nisi est sit amet facilisis. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ut faucibus pulvinar elementum integer enim. Est lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                        <p className="font-paragraphs">Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Aliquet bibendum enim facilisis gravida neque convallis a cras. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Massa tincidunt dui ut ornare lectus sit amet.</p>
                        <p className="font-paragraphs">Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Aliquet bibendum enim facilisis gravida neque convallis a cras. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Massa tincidunt dui ut ornare lectus sit amet.</p>
                        <p className="font-paragraphs">The end innovation is Cliste sense and we are expanding 💖😉</p>
                    </div>
                    <div className="col-lg-6 ">

                    </div>
                    <div className="founder-message">
                        <h2 className="font-headings founder-message-title">Founder’s message</h2>
                        <p className="font-paragraphs founder-message-text">Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Aliquet bibendum enim facilisis gravida neque <br />convallis a cras. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Massa tincidunt dui ut ornare lectus sit <br />amet Massa tincidunt dui ut ornare lectus sit amet.</p>
                        <video />
                    </div>
                </div>
            </div>
            <div className="team-section">
                <h2 className="font-headings team-section-heading">
                    Team behind Cliste
                </h2>
                <div className="row team-section-1">
                    {
                        teams_data_1.map((team, index) => {
                           
                            return (
                                <div className='team-content col-xs-6 col-sm-4 col-md-6 col-lg-3' key={index}>
                                    <div className="card team-cards" >
                                        <img src={team.image_url} className="card-img-top" alt="..." />
                                        <div className="card-body team-card-title">
                                            <h5 className="card-title font-headings team-card-heading-1">{team.name}</h5>
                                            <h5 className="card-title font-headings team-card-heading-2">{team.position}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    {
                        teams_data_2.map((team, index) => {
                           
                            return (
                                <div className='team-content col-xs-6 col-sm-4 col-md-6 col-lg-3' key={index}>
                                    <div className="card team-cards" >
                                        <img src={team.image_url} className="card-img-top" alt="..." />
                                        <div className="card-body team-card-title">
                                            <h5 className="card-title font-headings team-card-heading-1">{team.name}</h5>
                                            <h5 className="card-title font-headings team-card-heading-2">{team.position}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="sticky-box">
                    <h2 className="font-headings sticky-box-heading">
                        Join us
                    </h2>
                    <p className="font-paragraphs sticky-box-text">Are you interested to join our team Cliste and build some exciting products with us ?<br />
                        If yes, then please share your motivation and updated resume at <strong>joincliste@cliste.io</strong></p>

                </div>
            </div>

            <Partners marginTop={"15rem"} />
            <SenseProduct text={"Cliste Sense product"} />
            <Footer />
        </>
    )
}

export default ResourcesPage;