import house from '../../../../images/house.svg';
import silverStar from '../../../../images/silverStar.svg';
import goldStar from '../../../../images/goldStar.svg';

function HotelCard({ name, price, stars, date }) {

  return (
    <div className="hotel-card">
      <div className="hotel-card__image-container">
        <img src={house} alt="house" className="hotels-list__house" />
      </div>
      <p className="hotel-card__name">{name}</p>
      <p className="hotel-card__price">{price}</p>
      <p className="hotel-card__price">{date}</p>
      <div className="hotel-card__stars">
        <img src={ stars >= 1 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
        <img src={ stars >= 2 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
        <img src={ stars >= 3 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
        <img src={ stars >= 4 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
        <img src={ stars === 5 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
      </div>
    </div>
  );
}

export default HotelCard;
