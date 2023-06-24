import Slider from 'react-slick';
import "./slick.scss";
import "./slick-theme.scss";

import carousel1 from "../../Images/Carousel1.png";
import carousel2 from "../../Images/Carousel2.png";
import carousel3 from "../../Images/Carousel3.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div className="slick__container">
        <div className="slick-image" style={{ backgroundImage: `url(${carousel1})`}}/>
        <h1 className="slick__title">Узнай, где твои друзья</h1>
        <p className="slick__description">Проверь местоположение своих друзей в реальном времени</p>
      </div>
      <div className="slick__container">
        <div className="slick-image" style={{ backgroundImage: `url(${carousel2})`}}/>
        <h1 className="slick__title">Выбирай, чем хочешь заняться</h1>
        <p className="slick__description">И лови мэтчи совпадений с друзьями</p>
      </div>
      <div className="slick__container">
        <div className="slick-image" style={{ backgroundImage: `url(${carousel3})`}}/>
        <h1 className="slick__title">Общайся с друзьями</h1>
        <p className="slick__description">Планируй совместные встречи
          на интересных мероприятиях</p>
      </div>
    </Slider>
  );
};

export default Carousel;

