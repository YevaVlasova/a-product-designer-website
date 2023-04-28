import './Space.scss';
import spaceImage from "../../assets/p2Second.png"

export default function Space() {
  return (
    <>
        <div className="container space">
            <div className="space__info" data-aos="fade-right" data-aos-easing="linear"
              data-aos-duration="1500">
                <div className="space__title">defining the problem</div>
                <div className="space__desc">Designing a product that helps new startups setup their business in a coworking space with budget constraints.</div>
            </div>
            <div className="space__text">launch prototype</div>
        </div>
        <div className="space__image" data-aos="flip-up" data-aos-easing="ease-out-cubic"
            data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
            <img src={spaceImage} alt="SpaceIllustration" />
        </div>
    </>
  );
}