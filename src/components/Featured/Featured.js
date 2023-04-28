import ArrowIcon from "../Icons/ArrowIcon";
import './Featured.scss';

import leftfirstImage from "../../assets/work1.png"
import leftsecondImage from "../../assets/work3.png"
import rightfirstImage from "../../assets/work2.png"
import rightsecondImage from "../../assets/work4.png"

export default function Featured() {
  return (
    <div className="container featured">
        <div className="featured__title" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <ArrowIcon />
            Featured Work
        </div>
        <div className="featured__list">
            <div className="featured__image">
                <img src={leftfirstImage} alt="Work" />
                <div className="featured__middle">
                    <div className="featured__text">InVersion</div>
                </div>
            </div>
            <div className="featured__image">
                <img src={leftsecondImage} alt="Work" />
                <div className="featured__middle">
                    <div className="featured__text">InVersion</div>
                </div>
            </div>
            <div className="featured__image">
                <img src={rightfirstImage} alt="Work" />
                <div className="featured__middle">
                    <div className="featured__text">InVersion</div>
                </div>
            </div>
            <div className="featured__image">
                <img src={rightsecondImage} alt="Work" />
                <div className="featured__middle">
                    <div className="featured__text">InVersion</div>
                </div>
            </div>
        </div>
    </div>
  );
}