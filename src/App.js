import './App.css';
import LandingPage from './components/LandingPage';
import TechnologyPage from './components/TechnologyPage';
import ApplicationPage from './components/ApplicationPage';
import ResourcesPage from './components/ResourcesPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WaitListPage from './components/WaitListPage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/waitlist" element={<WaitListPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
