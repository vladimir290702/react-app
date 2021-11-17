import { Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AllMovies from "./components/AllMovies/AllMovies";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path='/home' component={AllMovies} />
          <Route path="/login" component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
