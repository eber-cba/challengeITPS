import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import ExerciseFour from "./components/ExerciseFour";
import ExerciseFive from "./components/ExerciseFive";
import Navbar from "./components/Navba";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exerciseFour" element={<ExerciseFour />} />
        <Route path="/exerciseFive" element={<ExerciseFive />} />
      </Routes>
    </div>
  );
}

export default App;
