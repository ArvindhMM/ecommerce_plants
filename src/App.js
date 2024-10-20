import './App.css';
import Home from './Components/Home';
import CartPage from './Components/Cart';
import ThankYou from './Components/ThankYouPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/thankyou' element={<ThankYou />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

