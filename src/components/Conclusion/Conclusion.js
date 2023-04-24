import './Conclusion.scss';
import conclusionImage from "../../assets/p2LastOne.png";

export default function Conclusion() {
  return (
    <div className="container conclusion">
        <div className="conclusion__title">Conclusion</div>
        <div className="conclusion__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae aenean aliquet pellentesque lectus. Libero convallis velit, morbi nullam pellentesque quis. Massa nascetur in commodo posuere porttitor.</div>
        <div className="conclusion__image">
            <img src={conclusionImage} alt="ConclusionIllustration" />
        </div>
        <div className="conclusion__case">Next Case</div>
    </div>
  );
}