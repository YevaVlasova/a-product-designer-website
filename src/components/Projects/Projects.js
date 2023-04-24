import './Projects.scss';

import oneImage from "../../assets/project1.png"
import twoImage from "../../assets/project2.png"
import threeImage from "../../assets/project3.png"

export default function Projects() {
  return (
    <div className="container projects">
        <div className="title">Personal Projects</div>
        <div className="projects__list">
            <img src={oneImage} alt="Projects" />
            <img src={twoImage} alt="Projects" />
            <img src={threeImage} alt="Projects" />          
        </div>
    </div>
  );
}