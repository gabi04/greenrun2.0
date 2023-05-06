import default_image from "../../default_image.jpg";
import Like from "../../svgs/Like";

type Props = {
  sport: String;
  i: number;
};

const Sport = ({ sport, i }: Props): JSX.Element => (
  <div className="hisory__sport" key={`sport-${i}`}>
    <div className="hisory__sport__img__container">
      <img
        className="hisory__sport__img"
        src={default_image}
        alt="default_image"
      />
      <p className="hisory__sport__name">{sport}</p>
    </div>
    <div className="hisory__sport__icon">
      <Like />
    </div>
  </div>
);

export default Sport;
