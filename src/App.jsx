import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'
import ShopByCategory from './pages/ShopByCategory';
import TrackOrder from './pages/TrackOrder';
import ContactUs from './pages/ContactUs';
import HelpCenter from './pages/HelpCenter';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';
import AboutUs from './pages/AboutUs';
import Suspension from './pages/Suspension';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import DetailSearch from './pages/DetailSearch';
import Login from './pages/Login';


function App() {

  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Landing />} />
        <Route path='/log-in' element={<Login/>}/>
        <Route path="/shop-by-category" element={<ShopByCategory />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/help-center' element={<HelpCenter />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/check-out' element={<CheckOut />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/suspension' element={<Suspension />} />
        <Route path='/products' element={<Products/>} />
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/detail-search' element={<DetailSearch/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
