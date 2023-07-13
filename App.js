import './App.css';
import Login from './Login';
import Createac from './Createac';
import Navbar from './Navbar';
import Contact from './Contact';
import Roundtrip from './Roundtrip';

// import home from './home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './home';
import AboutUs from './AboutUs';
import FlightDetails from './Flights';
import BookingForm from './Booking';
import ExploreFlights from './Explore';
import FlightSearch from './Search';

function App() {
  return (
    <Router>
     {/* <Navbar /> */}
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/Login"element={<Login/>}/>
       
        <Route path="/createac"element={<Createac/>}/>
        
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>

        
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Flights" element={<FlightDetails/>}/>
        <Route path="/Booking" element={<BookingForm/>}/>
        <Route path="/Flight" element={<Roundtrip/>}/>
        <Route path="/ExploreFlights" element={<ExploreFlights/>}/>
        <Route path="/FlightSearch" element={<FlightSearch/>}/>
       
       
      </Routes>
    </Router>
  );
}
export default App;