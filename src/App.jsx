import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GiddyUpApp from './Components/GiddyUpApp'
import Charts from './Components/admin/charts'
import Survey from './Components/admin/survey';
import './App.css'

function App() {

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<GiddyUpApp />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
    </div>
  </Router>
);
}

export default App