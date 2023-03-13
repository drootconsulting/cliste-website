import React from 'react'
import '../components/KitchenTechnology.css';
import chartcircle from '../assets/images/chartcircle.svg';
import graph from '../assets/images/graph.svg';
import box2 from '../assets/images/box2.svg';
import { Link } from 'react-router-dom';
const KitchenTechnology=() => {
  return (
    <div className="kitchen-wrapper">
      <h5 className="kitchen-tech-heading font-headings">
        Effortless blending of smart kitchen technology
      </h5>
      <div className="row kitchen-tech">
        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
          <img src={chartcircle} alt="" className='kitchen-tech-image img-fluid'/>
          <div className='kitchen-tech-card-body'>
          <h6 className='kitchen-tech-card-body-heading font-headings'>Lorem ipsum dolor sit amet</h6>
          <p className='kitchen-tech-card-body-text font-paragraphs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim,
          </p>
          </div>
        </div>

        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
          <img src={graph} alt="" className='kitchen-tech-image img-fluid'/>
          <div className='kitchen-tech-card-body'>
          <h6 className=' kitchen-tech-card-body-heading font-headings'>Lorem ipsum dolor sit amet</h6>
          <p className='kitchen-tech-card-body-text font-paragraphs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim,
          </p>
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
          <img src={box2} alt="" className='kitchen-tech-image img-fluid'/>
          <div className='kitchen-tech-card-body'>
          <h6 className='kitchen-tech-card-body-heading font-headings'>Lorem ipsum dolor sit amet</h6>
          <p className='kitchen-tech-card-body-text font-paragraphs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim,
          </p>
          </div>
        </div>
      </div>
      <p className="kitchen-tech-card-body-text font-paragraphs" style={{marginBottom:0}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ? explore more that <Link to="/" style={{textDecoration:"none"}}>clistestore.com</Link>
      </p>
    </div>
  );
}

export default KitchenTechnology