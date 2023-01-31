import React from 'react';
import ExperienceImg from '../images/exp-vector.png';

const Experience = () => (
  <div>
<section id="experience" className="experience_dinesh"> 
    <h2>Experience</h2>
    <div className="container">
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="experience">
                <div className="card">
                    <span>Dec 2019 - Present</span>
                    <h3>Senior Software Engineer -  RheinBrücke IT Consulting 
Pvt Ltd</h3>
                    <p>Chennai</p>
                 </div>
                   <div className="card">
                   <span>Oct 2017 - Nov 2019</span>
                      <h3>UI Designer & UI Developer - Sedin Technologies Pvt. 
Ltd</h3>
                      <p>Chennai</p>
                   </div>
                   <div className="card">
                      <span>Feb 2017 – Sep 2017</span>
                      <h3>UI Designer & UI Developer - WonderWrks IT Services 
Put Ltd</h3>
                      <p>Chennai</p>
                   </div>
                   <div className="card">
                      <span>Feb 2015 – Jan 2017</span>
                      <h3>UI Designer & UI Developer - Lokas</h3>
                      <p>Chennai</p>
                   </div>

                   <div className="card">
                      <span>June 2012 – Jan 2015</span>
                      <h3>WebDesigner & Developer - PERIYARWEBVISION</h3>
                      <p>Chennai</p>
                   </div>
              </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
               <div className="image">
                <img src={ExperienceImg} alt=""/>
               </div>
         </div>
      </div>
    </div>
  </section>
  </div>
);


export default Experience;
