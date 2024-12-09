// import { Background } from "./components/background/Background";
import Columns from "./components/columns/Columns"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Recipdis from "./components/columns/Recipdis"
import './App.css'

const App = () => {
 return (
    <div>
      <Navbar/>
      <Hero/>
      <Recipdis/>
      <Columns/>
    </div>
  )
}

export default App;