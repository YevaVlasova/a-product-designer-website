import ArrowIcon from "../Icons/ArrowIcon";
import './Featured.scss';

import leftfirstImage from "../../assets/work1.png"
import leftsecondImage from "../../assets/work3.png"
import rightfirstImage from "../../assets/work2.png"
import rightsecondImage from "../../assets/work4.png"

export default function Featured() {
  return (
    <div className="container featured">
        <div className="featured__title">
            <ArrowIcon />
            Featured Work
        </div>
        <div className="featured__list">
            <div className="featured__left">
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
            </div>
            <div className="featured__right">
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
    </div>
  );
}