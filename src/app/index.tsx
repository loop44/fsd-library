import Routing from 'pages';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

const App = () => (
  <div className="font-encode-sans">
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </div>
);

export default App;
