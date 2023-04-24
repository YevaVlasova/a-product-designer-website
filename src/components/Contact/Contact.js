import EmailIcon from "../Icons/EmailIcon";
import './Contact.scss';

export default function Contact() {
  return (
    <div className="container contact">
        <div className="contact__title">Contact Me</div>
        <div className="contact__desc">If you are looking to hire a product designer, 
            I’m currently available for freelance work
        </div>
        <a href="/" className='btn contact__btn'>
            <EmailIcon />
            <span>hi@yourname.com</span>
        </a>
    </div>
  );
}