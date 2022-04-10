import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import arrow from '../../../../images/arrow.svg';
import { vievDate } from "../../../../utils/vievDate";

function HotelListHeader() {

  const formData = useSelector(state => state.formData.formData)
  const [date, setDate] = useState('');

  useEffect(() => {
    if(formData.checkIn) {
      setDate(vievDate(formData.checkIn))
    }
  }, [formData])

  return (
    <div className="hotel-list-header">
      <div className="hotel-list-header__location-container">
        <span className="hotel-list-header__header">Отели</span>
        <img src={arrow} alt="arrow" className="hotel-list-header__arrow" />
        <span className="hotel-list-header__header">{formData.location}</span>
      </div>
      <span className="hotel-list-header__date">{date}</span>
    </div>
  );
}

export default HotelListHeader;
