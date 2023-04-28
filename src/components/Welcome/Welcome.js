import EmailIcon from "../Icons/EmailIcon";
import './Welcome.scss';

import welcomeImage from "../../assets/user.png"

export default function Welcome() {
  return (
    <div className="container welcome">
        <div className="welcome__info" data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
            <div className="welcome__title">Hi, I am Your Name
                A Product Designer 
                based in City.
            </div>
            <div className="welcome__desc">I help businesses and companies reach 
                their goals by designing user-centric digital 
                products & interactive experiences.
            </div>
            <a href="/" className='btn welcome__btn'>
                <EmailIcon />
                <span>hi@yourname.com</span>
            </a>
        </div>
        <div className="welcome__image" data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="200"
            data-aos-duration="2000">
            <img src={welcomeImage} alt="User" />
        </div>
    </div>
  );
}