import LogoIcon from '../Icons/LogoIcon';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="container header__container">
        <a href="/" className="header__logo">
          <LogoIcon />
        </a>
        <div className="header__nav">
          <Link to={'/'} className="header__a">Home</Link>
          <Link to={'/work'} className="header__a">Work</Link>
          <a href="/" className="header__a">Contact</a>
        </div>
      </div>
    </div>
  );
}