import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllMovies from "./components/AllMovies/AllMovies";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Banner from './components/Banner/Banner';
import ButtonSection from './components/CreateMovieButton/ButtonSection';
import AuthContextProvider from './contexts/authContext';

function App() {

  return (
    <AuthContextProvider>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path='/home' element={<Banner />} />
          <Route path='/all' element={<AllMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </div>
      <ButtonSection />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
