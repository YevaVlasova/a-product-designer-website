import './Work.scss';

import bgImage from "../../assets/p2Main.png";
import Covibe from '../../components/Covibe/Covibe';
import Space from '../../components/Space/Space';
import Solution from '../../components/Solution/Solution';
import Conclusion from '../../components/Conclusion/Conclusion';

export default function Work() {
  return (
    <>
        <div className="work__image" data-aos="fade-up" data-aos-easing="linear"
          data-aos-duration="500">
            <img src={bgImage} alt="BackgroundPicture" />
        </div>
        <Covibe />
        <Space />
        <Solution />
        <Conclusion />
    </>
  );
}