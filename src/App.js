import './App.css';
import LandingPage from './components/LandingPage';
import TechnologyPage from './components/TechnologyPage';
import ApplicationPage from './components/ApplicationPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
