import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Bayboss from './components/Byboss';
import Swiper from './Swiper';
import ReferenceSwiper from './ReferenceSwiper';
import References from './components/References';


function App() {
  return (
    <div class="App">
      <Navbar/>
      <Header/>
      <Bayboss/>
      <Swiper/>
      <References/>
      <ReferenceSwiper/>
      <Footer/>
    </div>
    
  );
}

export default App;
