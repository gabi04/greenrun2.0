import XSvg from "../../svgs/XSvg";
import Like from "../../svgs/Like";
import default_image from "./default_image.jpg";
import { HomeStyles } from "./HomeStyles";

const Home = (): JSX.Element => {
  return (
    <HomeStyles>
      <div className="home__img__container">
        <img src={default_image} alt="default_img_home" className="home__img" />
        <p className="home__img__sport">"TODO here goes the sport name"</p>
      </div>

      <div className="home__btns">
        <button className="home__btns__btn">
          <XSvg />
        </button>
        <button className="home__btns__btn home__btns__btn--active">
          <Like />
        </button>
      </div>
    </HomeStyles>
  );
};

export default Home;
