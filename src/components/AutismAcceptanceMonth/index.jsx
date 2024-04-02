import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from './Day1AAM.jpeg';
import CarouselImage2 from './Day2AAM.jpeg';

function AutismAcceptanceMonth() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={CarouselImage1} className='carousel-image'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CarouselImage2} className='carousel-image' ></img>
     
      </Carousel.Item>
      {/* <Carousel.Item>
        <CarouselImage1 text="Third slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default AutismAcceptanceMonth;