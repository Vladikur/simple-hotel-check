import { Switch, Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import Hotels from "../Hotels/Hotels";
import Login from "../Login/Login";
import { newFoundHotelsAction } from '../../store/foundHotelsReducer';
const axios = require('axios').default;


function App() {

  const history = useHistory();
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://engine.hotellook.com/api/v2/cache.json?location=Moscow&currency=rub&checkIn=2022-07-04&checkOut=2022-07-12&limit=10')
    .then(function (response) {
      console.log(response.data);
      const data = response.data
      dispatch(newFoundHotelsAction(data))
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

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
