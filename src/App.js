import "./App.css";
import LandingPage from "./components/LandingPage";
import TechnologyPage from "./components/TechnologyPage";
import ApplicationPage from "./components/ApplicationPage";
import ResourcesPage from "./components/Team";
// import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import WaitListPage from "./components/WaitListPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      {/* <HashRouter>
      <Routes>
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/waitlist" element={<WaitListPage />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/home" element={<LandingPage />} /> 
       
        <Route path="/" element={<WaitListPage />} />
      </Routes>
    </HashRouter> */}
      <WaitListPage />
    </div>
  );
}

export default App;
