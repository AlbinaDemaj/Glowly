import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import QuizPromptBubble from './components/QuizPromptBubble';
import RoutineBuilder from './pages/RoutineBuilder';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/shop" element={<Shop />} />
  <Route path="/cart" element={<CartPage />} />
  <Route path="/product/:id" element={<ProductDetail />} /> {/* kjo është e re */}
  <Route path="/routine" element={<RoutineBuilder />} />
</Routes>
<QuizPromptBubble />
      </Router>
    </CartProvider>
    
  );
}

export default App;
