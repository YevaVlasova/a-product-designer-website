import BehanceIcon from '../Icons/Socials/BehanceIcon';
import TwitterIcon from '../Icons/Socials/TwitterIcon';
import LinkedinIcon from '../Icons/Socials/LinkedinIcon';
import DribbleIcon from '../Icons/Socials/DribbleIcon';
import WhatsAppIcon from '../Icons/Socials/WhatsAppIcon';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
        <div className="container footer__container">
            <div className="footer__name">
                Made by <a className='footer__a' href="/">Your Name </a>
                 — Copyright 2021
            </div>
            <div className="footer__socials">
                <a href="/" className="footer__link">
                    <WhatsAppIcon />
                </a>
                <a href="/" className="footer__link">
                    <DribbleIcon />
                </a>
                <a href="/" className="footer__link">
                    <LinkedinIcon />
                </a>
                <a href="/" className="footer__link">
                    <TwitterIcon />
                </a>
                <a href="/" className="footer__link">
                    <BehanceIcon />
                </a>
            </div>
        </div>
    </div>
  );
}