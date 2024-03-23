import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Photo from '../../assets/Slider.png';

function MyCarousel() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Photo} alt="Slide 1" />
      </div>
      <div>
        <img src={Photo} alt="Slide 2" />
      </div>
      <div>
        <img src={Photo} alt="Slide 3" />
      </div>
      {/* Add more slides here if needed */}
    </Slider>
  );
}

export default MyCarousel;
