import Navbar from 'features/Navbar';
import { Route, Routes } from 'react-router-dom';

import Favourite from './Favourite';
import Library from './Library';
import LoginPage from './Login';
import RegisterPage from './Register';
import SearchBooksPage from './SearchBooks';

const Routing = () => (
  <div className="flex flex-col h-screen">
    <div className="flex-1">
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/search" element={<SearchBooksPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
    <Navbar />
  </div>
);

export default Routing;
