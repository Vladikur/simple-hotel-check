import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Hotels from "../Hotels/Hotels";
import Login from "../Login/Login";
import { fetchHotelsAction } from '../../store/foundHotelsReducer';

function App() {

  const history = useHistory();
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const searchParams = {
  //     location: 'Москва', 
  //     checkIn: data.checkIn,
  //     checkOut: checkOut,
  //   }
  //   dispatch(fetchHotelsAction())
  // }, [])

  function handleLogin({ login, password }) {
    if ( login && password ) {
      history.push('/hotels')
    }
  }

  return (
      <div className="app">
        <Switch>

          <Route exact path='/'>
            <Login
              onLogin={handleLogin}
            />
          </Route>

          <Route exact path='/hotels'>
            <Hotels/>
          </Route>

        </Switch>
      </div>
  );
}

export default App;
