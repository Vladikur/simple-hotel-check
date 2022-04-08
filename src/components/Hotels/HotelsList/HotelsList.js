import { useSelector } from "react-redux";
import Carousel from "./Carousel/Carousel";
import HotelCard from "./HotelCard/HotelCard";
import HotelListHeader from "./HotelListHeader/HotelListHeader";

function HotelsList() {

  const formData = useSelector(state => state.formData.formData)
  const foundHotelsData = useSelector(state => state.foundHotels.hotels)
  const likedHotelsData = useSelector(state => state.LikedHotels.hotels)

  return (
    <div className="hotels-list">
      <HotelListHeader/>
      <div className="hotels-list__carusel">
        <Carousel/>
      </div>
      <p className="hotels-list__liked-hotels">Добавлено в Избранное: {likedHotelsData.length} отелей</p>
      <div className="hotels-list__hotels-container">
        {foundHotelsData.map((hotel) => (
          <HotelCard
            key={hotel.hotelId}
            name={hotel.hotelName}
            price={hotel.priceAvg}
            stars={hotel.stars}
            date={formData.checkIn}
            days={formData.days}
            thisHotel={hotel}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelsList;
