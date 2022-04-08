import Favorites from "./Favorites/Favorites";
import Header from "./Header/Header";
import HotelsList from "./HotelsList/HotelsList";
import SearchForm from "./SearchForm/SearchForm";


function Hotels() {

  return (
    <div className="hotels">
      <Header/>
      <div className="hotels__container1">
        <div className="hotels__container2">
          <SearchForm/>
          <Favorites/>
        </div>
        <HotelsList/>
      </div>
    </div>
  );
}

export default Hotels;
