import React from 'react';
import SkillOne from '../images/html.png';
import SkillTwo from '../images/css.png';
import SkillThree from '../images/js.png';
import SkillFour from '../images/angular.png';
import SkillFive from '../images/bootstrap.png';
import SkillSix from '../images/jquery.png';
import SkillSeven from '../images/wordpress.png';
import SkillEight from '../images/photoshop.png';
import SkillNine from '../images/figma.png';

const Skills = () => (
  <div>
<section id="skills" className="skills_dinesh"> 
    <h2>Skills</h2>
    <div className="container">
            <div className="skills">
                <img src={SkillOne } alt="HTML" />
                <img src={SkillTwo} alt="CSS" />
                <img src={SkillThree} alt="JS" />
                <img src={SkillFour} alt="Angular" />
                <img src={SkillFive} alt="Bootstrap" />
                <img src={SkillSix} alt="Jquery" />
                <img src={SkillSeven} alt="Wordpress" />
                <img src={SkillEight} alt="Photoshop" />
                <img src={SkillNine} alt="Figma" />
            </div>
    </div>
  </section>
  </div>
);


export default Skills;
