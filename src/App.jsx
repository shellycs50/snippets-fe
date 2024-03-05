
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
