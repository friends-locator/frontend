import Slider from 'react-slick';
import "./slick.css";
import "./slick-theme.css";
import carousel1 from "../../Images/Carousel1.png";
import carousel2 from "../../Images/Carousel2.png";
import carousel3 from "../../Images/Carousel3.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img className="slick-image" src={carousel1} alt='slide-1' />
        <h1 className="welcome__title">Узнай, где твои друзья</h1>
        <p className="welcome__description">Проверь местоположением своих друзей в реальном времени</p>
      </div>
      <div>
        <img className="slick-image" src={carousel2} alt='slide-2' />
        <h1 className="welcome__title">Выбирай чем хочешь заняться</h1>
        <p className="welcome__description">Описание</p>
      </div>
      <div>
        <img className="slick-image" src={carousel3} alt='slide-3' />
        <h1 className="welcome__title">Заголовок</h1>
        <p className="welcome__description">Описание</p>
      </div>
    </Slider>
  );
};

export default Carousel;

