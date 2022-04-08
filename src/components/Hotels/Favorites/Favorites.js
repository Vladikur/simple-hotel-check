import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import HotelCard from "../HotelsList/HotelCard/HotelCard";
import { sortPrice, sortStars } from "../../../utils/sortHotels";
import { sortHotelAction } from "../../../store/likedHotelsReducer";
import select from '../../../images/select.svg';
import selectDisabled from '../../../images/selectDisabled.svg';

function Favorites() {
  const dispatch = useDispatch()
  const likedHotelsData = useSelector(state => state.LikedHotels.hotels)
  const formData = useSelector(state => state.formData.formData)
  const [stars, setStars] = useState(true);
  const [price, setPrice] = useState(true);
  const [typeFilter, setTypeFilter] = useState('');

  function handleRatingClick() {
    setTypeFilter('stars')
    if (stars) {
      const sortHotels = sortStars(likedHotelsData)
      dispatch(sortHotelAction(sortHotels))
      setStars(false)
    } else {
      const sortHotels = sortStars(likedHotelsData)
      const reversed = sortHotels.reverse()
      dispatch(sortHotelAction(reversed))
      setStars(true)
    }
  }

  function handlePriceClick() {
    setTypeFilter('price')
    if (price) {
      const sortHotels = sortPrice(likedHotelsData)
      dispatch(sortHotelAction(sortHotels))
      setPrice(false)
    } else {
      const sortHotels = sortPrice(likedHotelsData)
      const reversed = sortHotels.reverse()
      dispatch(sortHotelAction(reversed))
      setPrice(true)
    }
  }

  const starsButtonClassName = (
    `favorites__button ${typeFilter !== 'stars' ? 'favorites__button_type_disabled' : ''}`
  );
  const priceButtonClassName = (
    `favorites__button ${typeFilter !== 'price' ? 'favorites__button_type_disabled' : ''}`
  );

  const starsSelectClassName = (
    `${ !stars ? 'favorites__select-on-top' : 'favorites__select-on-bottom' }`
  );
  const priceSelectClassName = (
    `${ !price ? 'favorites__select-on-top' : 'favorites__select-on-bottom' }`
  );

  return (
      <div className="favorites">
        <h2 className="favorites__header">Избранное</h2>
        <div className="favorites__button-container">
          <button onClick={handleRatingClick} className={starsButtonClassName} aria-label="Рейтинг" type="button">
            Рейтинг <img src={ typeFilter === 'stars' ? select : selectDisabled} alt="select" className={starsSelectClassName} />
          </button>
          <button onClick={handlePriceClick} className={priceButtonClassName} aria-label="Цена" type="button">
            Цена <img src={ typeFilter === 'price' ? select : selectDisabled} alt="select" className={priceSelectClassName} />
          </button>
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
