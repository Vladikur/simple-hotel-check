import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Carousel from "./Carousel/Carousel";
import HotelCard from "./HotelCard/HotelCard";
import HotelListHeader from "./HotelListHeader/HotelListHeader";
import { vievDate } from "../../../utils/vievDate";
import { countHotelsString } from "../../../utils/countHotels";

function HotelsList() {

  const formData = useSelector(state => state.formData.formData)
  const foundHotelsData = useSelector(state => state.foundHotels.hotels)
  const likedHotelsData = useSelector(state => state.LikedHotels.hotels)

  const [hotels, setHotels] = useState([]);
  const [date, setDate] = useState('');
  const [countHotels, setCountHotels] = useState('');

  useEffect(() => {
    if (foundHotelsData.status !== 'error') {
      setHotels(foundHotelsData)
    } else {
      setHotels([])
    }
  }, [foundHotelsData])

  useEffect(() => {
    if(formData.checkIn) {
      setDate(vievDate(formData.checkIn))
    }
  }, [formData])

  useEffect(() => {
    setCountHotels(countHotelsString(likedHotelsData.length))
  }, [likedHotelsData])

  return (
    <div className="hotels-list">
      <HotelListHeader/>
      <div className="hotels-list__carusel">
        <Carousel/>
      </div>
      <p className="hotels-list__liked-hotels">Добавлено в Избранное: <span>{likedHotelsData.length}</span> {countHotels}</p>
      <div className="hotels-list__hotels-container">
        { foundHotelsData.status === 'error' ? <p className="hotels-list__not-found">По вашему запросу отелей не найдено.</p> : ''}
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.hotelId}
            name={hotel.hotelName}
            price={hotel.priceAvg}
            stars={hotel.stars}
            date={date}
            days={formData.days}
            thisHotel={hotel}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelsList;
