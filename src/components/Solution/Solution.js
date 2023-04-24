import './Solution.scss';
import soloneImage from "../../assets/p2Third.png";
import soltwoImage from "../../assets/p2Fourth.png";

export default function Solution() {
  return (
    <div className="container solution">
        <div className="solution__item">
            <div className="solution__image">
                <img src={soloneImage} alt="SolutionIllustration" />
            </div>
            <div className="solution__text">
                <div className="solution__title">solution 1</div>
                <div className="solution__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
        </div>
        <div className="solution__item">
            <div className="solution__image">
                <img src={soltwoImage} alt="SolutionIllustration" />
            </div>
            <div className="solution__text">
                <div className="solution__title">solution 1</div>
                <div className="solution__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </div>
        </div>
    </div>
  );
}