import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Photo from '../../assets/Slider.png'; 

function MyCarousel() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Photo}
          alt="Slide 1"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Photo}
          alt="Slide 2"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Photo}
          alt="Slide 3"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
