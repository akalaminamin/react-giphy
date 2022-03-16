import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="bg-gray-200">
      {/* <h1>In the name of Allah</h1> */}
      <Router>
        <Navbar />
        <SearchBar />
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
