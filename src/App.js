import { Route, Routes } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllMovies from "./components/AllMovies/AllMovies";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Banner from './components/Banner/Banner';
import AuthContextProvider from './contexts/authContext';
import AddMovie from './components/AddMovie/AddMovie';
import CategorySection from './components/CategorySection/CategorySection';
import MovieDetails from './components/MovieDetails/MovieDetails';
import EditMovie from './components/EditMovie/EditMovie';
import AllMovieAddictMovies from './components/AllMovieAddictMovies/AllMovieAddictMovies';
import NetflixMovieDetails from './components/NetflixMovieDetails/NetflixDetails';
import Profile from './components/Profile/Profile';

toast.configure();

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <ToastContainer autoClose={3500}/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Banner />} />
          <Route path='/all' element={<CategorySection />} />
          <Route path='/all-movie-addict-movies' element={<AllMovieAddictMovies />} />
          <Route path='/all-neflix-movies' element={<AllMovies />} />
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add-movie' element={<AddMovie />} />
          <Route path='/details/:movieId' element={<MovieDetails />} />
          <Route path='/edit/:movieId' element={<EditMovie />} />
          <Route path='/details/netflix/:id/' element={<NetflixMovieDetails />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>

      <Footer />
    </AuthContextProvider>
  );
}

export default App;
