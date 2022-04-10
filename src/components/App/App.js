import { Switch, Route, useHistory } from 'react-router-dom';
import Hotels from "../Hotels/Hotels";
import Login from "../Login/Login";

function App() {

  const history = useHistory();

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
