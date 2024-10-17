import { Card } from 'react-bootstrap';
import AutoCarousel from './component/AutoCarousel';
import Home from './component/Home';
// import Insights from './component/Insights';
import PlatformCard from './component/PlatformCard';
import Footer from './Layout/Footer';
// import PlatformCard from './component/PlatformCard';
import NavigationBar from './Layout/NavigationBar';
import Cards from './component/cards';
import Insights from './component/Insights';
import Crl from './component/Crl';
import Sprih from './component/Sprih.js';
import Earth from './component/earth.js';



function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
      {/* <AutoCarousel/> */}
      <Crl/>
      <PlatformCard/>
      <AutoCarousel/>
      <Sprih/>
      <Earth/>
      <Insights/>
      {/* <Cards/> */}
      <Footer/>
    </div>
  );
}

export default App;
