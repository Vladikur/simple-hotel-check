import { useSelector } from "react-redux";
import arrow from '../../../../images/arrow.svg';

function HotelListHeader() {

  const formData = useSelector(state => state.formData.formData)

  return (
    <div className="hotel-list-header">
      <div className="hotel-list-header__location-container">
        <span className="hotel-list-header__header">Отели</span>
        <img src={arrow} alt="arrow" className="hotel-list-header__arrow" />
        <span className="hotel-list-header__header">{formData.location}</span>
      </div>
      <span className="hotel-list-header__date">{formData.checkIn}</span>
    </div>
  );
}

export default HotelListHeader;
