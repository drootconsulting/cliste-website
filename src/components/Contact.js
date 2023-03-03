import '../components/Contact.css';
import rect from '../assets/images/rect.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
const Contact =()=>{

    const countries = [
        { value: 'usa', label: 'United States of America' },
        { value: 'can', label: 'Canada' },
        { value: 'mex', label: 'Mexico' },
        // add more countries as needed
      ];

      const sources = [
        { value: 'instagram', label: 'Instagram' },
        { value: 'you tube', label: 'You Tube' },
        { value: 'facebook', label: 'Facebook' },
      ]
    
      const queries = [
        { value: 'instagram', label: 'Instagram' },
        { value: 'you tube', label: 'You Tube' },
        { value: 'facebook', label: 'Facebook' },
      ]
    return(
        <>
        <div className='contact-us-section'>
            <div className='contact-us-headings'>
                <h5 className='contact-us-title font-headings'>
                    Say Hello
                </h5>
                <p className='font-headings contact-us-text'>Whether you want to speak to sales, find out more about partnering with Sense or have a general enquiry, our team is ready to help</p>
            </div>
            <div className='row contact-us-sub-section'>
                
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 contact-us-live-chat contact-us-desktop-view'>
                    <img src={rect} alt="live-chat"/>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 contact-us-form'>
                        <Form>
                            <div className="row g-3">
                                <div className="col-md-6 contact-us-form-heading">
                                    <Form.Label  className="form-label font-headings ">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="your-name" name="your-name" required/>
                                </div>
                                <div className="col-md-6 contact-us-form-heading">
                                    <Form.Label className="form-label font-headings contact-us-form-heading">Last Surname</Form.Label>
                                    <Form.Control type="text" className="form-control" id="your-surname" name="your-surname" required/>
                                </div>
                                <div className="col-md-6 contact-us-form-heading">
                                    <Form.Label  className="form-label font-headings contact-us-form-heading">Email address</Form.Label>
                                    <Form.Control type="email" className="form-control" id="your-email" name="your-email" required/>
                                </div>
                                <div className="col-md-6 contact-us-form-heading">
                                    <Form.Label  className="form-label font-headings contact-us-form-heading">Country</Form.Label>
                                    <Form.Select className="form-control form-select font-headings">
                                        <option value=""></option>
                                        {countries.map(country => (
                                            <option key={country.value} value={country.value}>
                                                {country.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className="col-md-6 contact-us-form-heading">
                                    <Form.Label className="form-label font-headings contact-us-form-heading">How did you head about us ?</Form.Label>
                                    <Form.Select className="form-control form-select font-headings">
                                        <option value=""></option>
                                        {sources.map(source => (
                                            <option key={source.value} value={source.value}>
                                                {source.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className="col-md-6 contact-us-form-heading">
                                    <Form.Label  className="form-label font-headings contact-us-form-heading">I need to talk about this</Form.Label>
                                    <Form.Select className="form-control form-select font-headings">
                                        <option value=""></option>
                                        {queries.map(query => (
                                            <option key={query.value} value={query.value}>
                                                {query.label}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className="col-12 contact-us-form-heading">
                                    <Form.Label  className="form-label font-headings contact-us-form-heading">Tell us more about your enquiry</Form.Label>
                                    {/* <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea> */}
                                    <Form.Control as="textarea" rows={5} />
                                </div>
                                <div className='col-12 contact-us-form-heading'>
                                    <div className="form-check">
                                        <Form.Check  type="checkbox" value="" id="flexCheckDefault"/>
                                            <Form.Label className=" font-headings contact-us-form-heading">
                                            I would like to subscribe to the Cliste sense's  newsletter{" "}<Link to ="/privacypolicy" className='privacypolicy-link'>(View Cliste Sense's  Privacy Notice)</Link>
                                            </Form.Label>
                                    </div>
                                </div>
                                <div className="col-12 contact-us-form-btn contact-us-form-heading">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button data-res="<?php echo $sum; ?>" type="submit" className="btn fw-bold font-headings contact-us-form-heading contact-us-form-submit-btn" >Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                </div>
            </div>

        </div>
        <Footer/>
        </>
    )
}

export default Contact;