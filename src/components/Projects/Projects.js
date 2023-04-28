import './Projects.scss';

import oneImage from "../../assets/project1.png"
import twoImage from "../../assets/project2.png"
import threeImage from "../../assets/project3.png"

export default function Projects() {
  return (
    <div className="container projects">
        <div className="title">Personal Projects</div>
        <div className="projects__list">
            <img src={oneImage} alt="Projects" data-aos="flip-down" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" data-aos-anchor-placement="top-bottom"/>
            <img src={twoImage} alt="Projects" data-aos="flip-up" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" data-aos-anchor-placement="center-bottom"/>
            <img src={threeImage} alt="Projects" data-aos="flip-down" data-aos-easing="ease-out-cubic"
              data-aos-duration="2000" data-aos-anchor-placement="bottom-bottom"/>          
        </div>
    </div>
  );
}