import Routing from 'pages';
import { Provider } from 'react-redux/es/exports';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';

import './index.scss';

const App = () => (
  <div className="font-encode-sans">
    <Provider store={store}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
