import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components and Routes
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotesState from './context/notes/NotesState';


function App() {
  return (
    <>
      <NotesState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </Router>
      </NotesState>
    </>
  );
}

export default App;