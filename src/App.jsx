import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GiddyUpApp from './Components/GiddyUpApp'
import Error from './Components/Body/Error';
import Charts from './Components/admin/charts'

import './App.css'

function App() {

  return (
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Error />} />
        <Route path="/charts" element={<Error />} />
      </Routes>
    </div>
  </Router>
);
}

export default App