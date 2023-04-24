import './Covibe.scss';

export default function Covibe() {
  return (
    <div className="container covibe">
        <div className="covibe__info">
            <div className="covibe__text">Covibe</div>
            <div className="covibe__title">Co-working spaces for 
                tech startups
            </div>
        </div>
        <div className="covibe__list">
            <div className="covibe__block">
                <div className="covibe__list-title">client</div>
                <div className="covibe__list-desc">Covibe</div>
            </div>
            <div className="covibe__block">
                <div className="covibe__list-title">role</div>
                <div className="covibe__list-desc">Product Designer</div>
            </div>
            <div className="covibe__block">
                <div className="covibe__list-title">industry</div>
                <div className="covibe__list-desc">Co-working</div>
            </div>
            <div className="covibe__block">
                <div className="covibe__list-title">duration</div>
                <div className="covibe__list-desc">2 Months</div>
            </div>
        </div>
    </div>
  );
}