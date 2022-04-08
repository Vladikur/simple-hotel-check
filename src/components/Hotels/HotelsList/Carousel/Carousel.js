import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carousel1 from '../../../../images/carousel1.png';
import carousel2 from '../../../../images/carousel2.png';
import carousel3 from '../../../../images/carousel3.png';

function Carousel() {

  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <div className="carousel__empty-container">
      <div className="carousel__image-container">
        <img className="carousel__image" src={carousel1} onDragStart={handleDragStart} role="presentation" alt='картинка'/>
      </div>
    </div>,
    <div className="carousel__empty-container">
      <div className="carousel__image-container">
        <img className="carousel__image" src={carousel2} onDragStart={handleDragStart} role="presentation" alt='картинка'/>
      </div>
    </div>,
        <div className="carousel__empty-container">
      <div className="carousel__image-container">
        <img className="carousel__image" src={carousel3} onDragStart={handleDragStart} role="presentation" alt='картинка'/>
      </div>
    </div>,
    <div className="carousel__empty-container">
      <div className="carousel__image-container">
        <img className="carousel__image" src={carousel1} onDragStart={handleDragStart} role="presentation" alt='картинка'/>
      </div>
    </div>,
    <div className="carousel__empty-container">
      <div className="carousel__image-container">
        <img className="carousel__image" src={carousel2} onDragStart={handleDragStart} role="presentation" alt='картинка'/>
      </div>
    </div>,
    <div className="carousel__empty-container">
      <div className="carousel__image-container">
        <img className="carousel__image" src={carousel3} onDragStart={handleDragStart} role="presentation" alt='картинка'/>
      </div>
    </div>,
  ];

  return (
    <AliceCarousel
      autoPlayInterval={2000}
      infinite={true}
      autoPlay={true}
      autoWidth={true}
      disableButtonsControls={true}
      disableDotsControls={true}
      mouseTracking
      items={items}
    />
  );
}

export default Carousel;
