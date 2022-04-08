import { useDispatch, useSelector } from "react-redux";
import HotelCard from "../HotelsList/HotelCard/HotelCard";

function Favorites() {
  const likedHotelsData = useSelector(state => state.LikedHotels.hotels)
  const formData = useSelector(state => state.formData.formData)

  function handleRatingClick() {

  }

  function handlePriceClick() {
    
  }

  return (
      <div className="favorites">
        <h2 className="favorites__header">Избранное</h2>
        <div className="favorites__button-container">
          <button onClick={handleRatingClick} className="favorites__button" aria-label="Лайк" type="button">Рейтинг</button>
          <button onClick={handlePriceClick} className="favorites__button" aria-label="Лайк" type="button">Цена</button>
        </div>
        <div className="favorites__hotels-container">
        {likedHotelsData.map((hotel) => (
          <HotelCard
            key={hotel.hotelId}
            name={hotel.hotelName}
            price={hotel.priceAvg}
            stars={hotel.stars}
            date={formData.checkIn}
            days={formData.days}
            thisHotel={hotel}
            likedHotels={true}
          />
        ))}
      </div>
      </div>
  );
}

export default Favorites;
