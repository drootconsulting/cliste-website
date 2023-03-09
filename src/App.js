import "./App.css";
import LandingPage from "./components/LandingPage";
import TechnologyPage from "./components/TechnologyPage";
import ApplicationPage from "./components/ApplicationPage";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import WaitListPage from "./components/WaitListPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";
import Store from "./components/Store";
import ProductPage from "./components/ProductPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/waitlist" element={<WaitListPage />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/" element={<WaitListPage />} />
        </Routes>
      </BrowserRouter>
      {/* <WaitListPage /> */}
    </div>
  );
}

export default App;
