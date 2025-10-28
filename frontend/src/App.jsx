import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Fortnite from "./pages/Fortnite";
import Overwatch from "./pages/Overwatch";
import Genshin from "./pages/Genshin";
import Roblox from "./pages/Roblox";
import Playstation from "./pages/Playstation";
import Fifa from "./pages/Fifa";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FAQ from "./pages/FAQ";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fortnite" element={<Fortnite cart={cart} setCart={setCart} />} />
          <Route path="/overwatch" element={<Overwatch cart={cart} setCart={setCart} />} />
          <Route path="/genshin" element={<Genshin cart={cart} setCart={setCart} />} />
          <Route path="/roblox" element={<Roblox cart={cart} setCart={setCart} />} />
          <Route path="/playstation" element={<Playstation cart={cart} setCart={setCart} />} />
          <Route path="/fifa" element={<Fifa cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
