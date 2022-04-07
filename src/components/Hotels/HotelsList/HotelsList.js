import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import HotelCard from "./HotelCard/HotelCard";
import HotelListHeader from "./HotelListHeader/HotelListHeader";

function HotelsList() {

  const formData = useSelector(state => state.formData.formData)
  const foundHotelsData = useSelector(state => state.foundHotels.hotels)

  return (
    <div className="hotels-list">
      <HotelListHeader/>
      <p className="hotels-list__liked-hotels">Добавлено в Избранное: 3 отеля</p>
      <div className="hotels-list__hotels-container">
        {foundHotelsData.map((hotel) => (
          <HotelCard
            key={hotel.hotelId}
            name={hotel.hotelName}
            price={hotel.priceAvg}
            stars={hotel.stars}
            date={formData.checkIn}
          />
        ))}
      </div>
    </div>
  );
}

export default HotelsList;
