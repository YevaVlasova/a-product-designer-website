import './Solution.scss';
import soloneImage from "../../assets/p2Third.png";
import soltwoImage from "../../assets/p2Fourth.png";

export default function Solution() {
  return (
    <div className="container solution">
        <div className="solution__item">
            <div className="solution__image" data-aos="fade-up-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                <img src={soloneImage} alt="SolutionIllustration" />
            </div>
            <div className="solution__text" data-aos="fade-up-left" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <div className="solution__title">solution 1</div>
                <div className="solution__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
        </div>
        <div className="solution__item">
            <div className="solution__image" data-aos="fade-up-left" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
                <img src={soltwoImage} alt="SolutionIllustration" />
            </div>
            <div className="solution__text" data-aos="fade-up-right" data-aos-offset="300"
                data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <div className="solution__title">solution 1</div>
                <div className="solution__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
        </div>
    </div>
  );
}