import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PersonalBanking from './pages/PersonalBanking';
import BusinessBanking from './pages/BusinessBanking';
import NRIBanking from './pages/NRIBanking';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal" element={<PersonalBanking />} />
          <Route path="/business" element={<BusinessBanking />} />
          <Route path="/nri" element={<NRIBanking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;