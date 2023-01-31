import React from 'react';
import prabakaranImg from '../images/prabakaran-image.png';
import resume from '../images/resume/prabakarantss-profile.pdf';


const Banner = () => (
  <div>
<section id="banner" className="banner_dinesh"> 
      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="intro">
                    <h1>Hi, I'm Prabakaran</h1>
                    <h2>UI Designer & UI Developer</h2>
                    <p>A passionate Web Developer having an experience of building Web Application and Websites with user friendly...</p>
                    <div className="resume">
                        <a href={resume} target="_blank">Download Resume</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="image">
                 <img src={prabakaranImg} alt="Dinesh"/>
                </div>
           </div>
        </div>
      </div>
    </section>
  </div>
);


export default Banner;
