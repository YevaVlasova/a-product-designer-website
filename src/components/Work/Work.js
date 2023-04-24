import './Work.scss';

import bgImage from "../../assets/p2Main.png";
import Covibe from '../Covibe/Covibe';
import Space from '../Space/Space';
import Solution from '../Solution/Solution';
import Conclusion from '../Conclusion/Conclusion';

export default function Work() {
  return (
    <>
        <div className="work__image">
            <img src={bgImage} alt="BackgroundPicture" />
        </div>
        <Covibe />
        <Space />
        <Solution />
        <Conclusion />
    </>
  );
}