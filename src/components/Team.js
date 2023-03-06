import '../components/Team.css';
import { teams_data_1, teams_data_2 } from "../data";
import image1 from '../assets/images/machinelearning1.png';
const Team = () => {
    return (
      <>
        <div className="story-content">
          <h2 className="font-headings story-content-title">Cliste Story</h2>
          <p className="font-paragraphs story-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus. Ullamcorper velit sed ullamcorper morbi tincidunt. Ac placerat vestibulum lectus mauris. Netus et malesuada fames ac. In dictum non consectetur a. Et sollicitudin ac orci phasellus egestas tellus rutrum. Eget lorem dolor sed viverra ipsum nunc. Odio ut sem nulla pharetra. Varius duis at consectetur lorem donec massa sapien. Et molestie ac feugiat sed. Eget nullam non nisi est sit amet facilisis. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Ut faucibus pulvinar elementum integer enim. Est lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
        <div className="founder-message">
          <h2 className="font-headings founder-message-title">
            Founder’s message
          </h2>
          <p className="font-paragraphs founder-message-text">
            Dictumst quisque sagittis purus sit amet volutpat consequat mauris.
            Aliquet bibendum enim facilisis gravida neque 
            convallis a cras. Vel fringilla est ullamcorper eget nulla facilisi
            etiam dignissim. Massa tincidunt dui ut ornare lectus sit 
            amet Massa tincidunt dui ut ornare lectus sit amet.
          </p>
          <img src={image1} alt="" className='founder-message-video'/>
        
        <div className="team-section">
          <h2 className="font-headings team-section-heading">
            Team behind Cliste
          </h2>
          <div className="row team-section-1">
            {teams_data_1.map((team, index) => {
              return (
                <div
                  className="team-content col-xs-6 col-sm-6 col-md-6 col-lg-3"
                  key={index}
                >
                  <div className="card team-cards">
                    <img
                      src={team.image_url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body team-card-title">
                      <h5 className="card-title font-headings team-card-heading-1">
                        {team.name}
                      </h5>
                      <h5 className="card-title font-headings team-card-heading-2">
                        {team.position}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div className="row">
            {teams_data_2.map((team, index) => {
              return (
                <div
                  className="team-content col-xs-6 col-sm-6 col-md-6 col-lg-3"
                  key={index}
                >
                  <div className="card team-cards">
                    <img
                      src={team.image_url}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body team-card-title">
                      <h5 className="card-title font-headings team-card-heading-1">
                        {team.name}
                      </h5>
                      <h5 className="card-title font-headings team-card-heading-2">
                        {team.position}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
          <div className="sticky-box">
            <h2 className="font-headings sticky-box-heading">Join us</h2>
            <p className="font-paragraphs sticky-box-text">
              Are you interested to join our team Cliste and build some exciting
              products with us ?<br />
              If yes, then please share your motivation and updated resume at{" "}
              <strong>joincliste@cliste.io</strong>
            </p>
          </div>
        </div>
        </div>
      </>
    );
}

export default Team;