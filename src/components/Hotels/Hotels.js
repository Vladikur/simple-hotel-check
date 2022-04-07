import { useDispatch, useSelector } from "react-redux";
import Header from "./Header/Header";
import HotelsList from "./HotelsList/HotelsList";
import SearchForm from "./SearchForm/SearchForm";


function Hotels() {

  const dispatch = useDispatch()
  const hotels = useSelector(state => state.foundHotels.hotels)
  console.log(hotels)

  return (
    <div className="hotels">
      <Header/>
      <SearchForm/>
      <HotelsList/>
    </div>
  );
}

export default Hotels;
