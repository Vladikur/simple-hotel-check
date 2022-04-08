import { useDispatch, useSelector } from "react-redux";
import house from '../../../../images/house.svg';
import silverStar from '../../../../images/silverStar.svg';
import goldStar from '../../../../images/goldStar.svg';
import { likeHotelAction, removeHotelAction } from "../../../../store/likedHotelsReducer";

function HotelCard({ name, price, stars, date, days, thisHotel, likedHotels }) {

  const dispatch = useDispatch()
  const likedHotelsData = useSelector(state => state.LikedHotels.hotels)

  const isLiked = likedHotelsData.some(i => i.hotelId === thisHotel.hotelId);
  const cardLikeButtonClassName = (
    `hotel-card__like ${likedHotels ? 'hotel-card__like_position_favorites' : 'hotel-card__like_position_found'} ${isLiked ? 'hotel-card__like_active' : ''}`
  );
  const cardPriceClassName = (
    `hotel-card__price ${likedHotels ? 'hotel-card__price_position_favorites' : 'hotel-card__price_position_found'}`
  );

  function handleLikeClick() {
    
    if (!isLiked) {
      const hotel = thisHotel
      hotel.date = date
      hotel.days = days
      dispatch(likeHotelAction(thisHotel))
    } else {
      dispatch(removeHotelAction(thisHotel.hotelId))
    }
  }

  return (
    <div className="hotel-card">
      <div className="hotel-card__container">
        { likedHotels ? '' :
        <div className="hotel-card__image-container">
          <img src={house} alt="house" className="hotels-list__house" />
        </div>
        }
        <div className="hotel-card__info-container">
          <p className="hotel-card__name">{name}</p>
          <p className="hotel-card__date">{ likedHotels ? thisHotel.date : date } -- { likedHotels ? thisHotel.days : days } день</p>
          <div className="hotel-card__stars">
            <img src={ stars >= 1 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
            <img src={ stars >= 2 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
            <img src={ stars >= 3 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
            <img src={ stars >= 4 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
            <img src={ stars === 5 ? goldStar : silverStar } alt="star" className="hotel-card__star" />
          </div>
        </div>
      </div>
      <button onClick={handleLikeClick} className={cardLikeButtonClassName} aria-label="Лайк" type="button"></button>
      <p className={cardPriceClassName}><span>Price: </span> {Math.ceil(price)} ₽</p>
    </div>
  );
}

export default HotelCard;
