import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import SearchBar from './components/SearchBar/SearchBar';
import Home from './pages/Home/Home';
import SearchResult from './pages/Home/SearchResult/SearchResult';

function App() {
  return (
    <div className="bg-gray-200">
      {/* <h1>In the name of Allah</h1> */}
      <Router>
        <Navbar />
        <SearchBar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:inputvalue' element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
