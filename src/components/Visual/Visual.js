import './Visual.scss';

import firstImage from "../../assets/visual1.png"
import secondImage from "../../assets/visual2.png"
import thirdImage from "../../assets/visual3.png"
import fourthImage from "../../assets/visual4.png"
import fifthImage from "../../assets/visual5.png"
import sixthImage from "../../assets/visual6.png"

export default function Visual() {
  return (
    <div className="container visual">
        <div className="title">Visual Explorations</div>
        <div className="visual__list">
            <img src={firstImage} alt="Visual" />
            <img src={secondImage} alt="Visual" />
            <img src={thirdImage} alt="Visual" />
            <img src={fourthImage} alt="Visual" />
            <img src={fifthImage} alt="Visual" />
            <img src={sixthImage} alt="Visual" />            
        </div>
    </div>
  );
}