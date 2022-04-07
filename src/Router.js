import { HashRouter } from 'react-router-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/index'

function Router() {

  return (
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>
  );
}

export default Router;
