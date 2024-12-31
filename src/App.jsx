// import { Background } from "./components/background/Background";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Recipdis from "./components/columns/Recipdis";
// import Columns from "./components/columns/Columns";
import About from './pages/about/About';
// import Recipes from "./pages/Recipes";
// import Substitutes from "./pages/Substitutes";
// import DietaryInfo from "./pages/DietaryInfo";
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is visible on all pages */}
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={
          <div>
            <Hero />
            <Recipdis />
            {/* <Columns /> */}
          </div>
        } />
        <Route path="/about" element={<About />} />
        {/* <Route path="/recipes" element={<Recipes />} />
        <Route path="/substitutes" element={<Substitutes />} />
        <Route path="/dietary-info" element={<DietaryInfo />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
