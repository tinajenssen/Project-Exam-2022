import Carousel from "react-bootstrap/Carousel";
import img_01 from "../../img/img_01.jpg";
import img_02 from "../../img/img_02.jpg";
import img_03 from "../../img/img_03.jpg";
import img_04 from "../../img/img_04.jpg";
import logo from "../../img/logo_white.png";

export default function SlideShow() {
  return (
    <Carousel>
      <Carousel.Item interval={3000} className="carousel__item">
        <img src={logo} alt="logo" className="logo--white" />
        <div
          style={{ backgroundImage: `url(${img_01})` }}
          className="carousel__img"
        ></div>
      </Carousel.Item>
      <Carousel.Item interval={3000} className="carousel__item">
        <img src={logo} alt="logo" className="logo--white" />
        <div
          style={{ backgroundImage: `url(${img_02})` }}
          className="carousel__img"
        ></div>
      </Carousel.Item>

      <Carousel.Item interval={3000} className="carousel__item">
        <img src={logo} alt="logo" className="logo--white" />
        <div
          style={{ backgroundImage: `url(${img_03})` }}
          className="carousel__img"
        ></div>
      </Carousel.Item>

      <Carousel.Item interval={3000} className="carousel__item">
        <img src={logo} alt="logo" className="logo--white" />
        <div
          style={{ backgroundImage: `url(${img_04})` }}
          className="carousel__img"
        ></div>
      </Carousel.Item>
    </Carousel>
  );
}
