import Search from 'features/Search';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './Login';
import RegisterPage from './Register';

const Routing = () => (
  <Routes>
    <Route
      path="/"
      element={
        <div>
          <Search />
        </div>
      }
    />
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
  </Routes>
);

export default Routing;
