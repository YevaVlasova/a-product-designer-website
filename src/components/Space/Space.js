import './Space.scss';
import spaceImage from "../../assets/p2Second.png"

export default function Space() {
  return (
    <>
        <div className="container space">
            <div className="space__info">
                <div className="space__title">defining the problem</div>
                <div className="space__desc">Designing a product that helps new startups setup their business in a coworking space with budget constraints.</div>
            </div>
            <div className="space__text">launch prototype</div>
        </div>
        <div className="space__image">
            <img src={spaceImage} alt="SpaceIllustration" />
        </div>
    </>
  );
}