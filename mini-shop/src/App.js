import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import CategoryScreen from './Components/Screens/CategoryScreen';
import ProductScreen from './Components/Screens/ProductScreen'

const App = () => {
  const [showCart, setShowCart] = useState(false)

  const onShowCartHandler = () => {
    setShowCart(true);
  }

  return (
    <Router>
      <Header onClickShowCart={onShowCartHandler} />
      <main>
        <Routes>
          <Route path="/" element={<CategoryScreen />} exact />
          <Route path="/get_product" element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
