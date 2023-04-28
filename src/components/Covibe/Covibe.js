import './Covibe.scss';

export default function Covibe() {
  return (
    <div className="container covibe">
        <div className="covibe__info" data-aos="fade-right" data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="covibe__text">Covibe</div>
            <div className="covibe__title">Co-working spaces for 
                tech startups
            </div>
        </div>
        <div className="covibe__list">
            <div className="covibe__block" data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
                <div className="covibe__list-title">client</div>
                <div className="covibe__list-desc">Covibe</div>
            </div>
            <div className="covibe__block" data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
                <div className="covibe__list-title">role</div>
                <div className="covibe__list-desc">Product Designer</div>
            </div>
            <div className="covibe__block" data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
                <div className="covibe__list-title">industry</div>
                <div className="covibe__list-desc">Co-working</div>
            </div>
            <div className="covibe__block" data-aos="flip-up" data-aos-easing="ease-out-cubic"
                data-aos-duration="2500" data-aos-anchor-placement="top-bottom">
                <div className="covibe__list-title">duration</div>
                <div className="covibe__list-desc">2 Months</div>
            </div>
        </div>
    </div>
  );
}