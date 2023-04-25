import './Visual.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.33}
          
        >
          <div className="visual__item">
            <img src={firstImage} alt="Visual" />
          </div>
          <div className="visual__item">
            <img src={secondImage} alt="Visual" />
          </div>
          <div className="visual__item">
            <img src={thirdImage} alt="Visual" />
          </div>
          <div className="visual__item">
            <img src={fourthImage} alt="Visual" />
          </div>
          <div className="visual__item">
            <img src={fifthImage} alt="Visual" />
          </div>
          <div className="visual__item">
            <img src={sixthImage} alt="Visual" /> 
          </div> 
        </Carousel>          
        </div>
    </div>
  );
}