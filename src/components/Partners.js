import { Button } from 'react-bootstrap';
import '../components/Partners.css';

const Partners=({marginTop})=>{

    return (
      <>
        <div className="partners" style={{ marginTop: marginTop }}>
          <div className='partners-content'>
            <h2 className="partners-heading">Our Partners</h2>
            <p className='partners-content-text'>
            Let's build a successful partnership that benefits both our businesses. Thank you for choosing to partner with use will work closely with you to ensure that our partnership meets your needs and helps you achieve your business goals.
            </p>
            <Button className='partner-join-btn'>Join in</Button>
          </div>
        </div>
      </>
    );
}

export default Partners;