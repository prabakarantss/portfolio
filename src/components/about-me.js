import React from 'react';
import uiDeveloper from '../images/ui_developer.png';
import Experience from '../images/experience.png';
import Graduate from '../images/graduate.png';

const AboutMe = () => (
  <div>
      <section id="about" className="about_dinesh"> 
    <h2>About Me</h2>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="image">
              <img src={uiDeveloper} alt=""/>
            </div>
      </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="about-me">
                  <p>UI Developer with 10+ years of experience. Develop highly interactive Front end / User Interfaces for Websites.<br/><br/>
                    Interested in the entire frontend spectrum and working on ambitious projects. Proficient at Web Application, Website Design, Ecommerce Development and Search Engine Optimization. I have done my graduated Bachelor of Technology in 2012 Batch</p>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="wrapper">
                                <img src={Experience} alt=""/>
                                <p>10+ Years Experience</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="wrapper">
                                <img src={Graduate} alt=""/>
                                <p>B.Tech Graduate</p>
                            </div>
                    </div>
                    </div>
                </div>
          </div>
      </div>
    </div>
  </section>
  </div>
);


export default AboutMe;
