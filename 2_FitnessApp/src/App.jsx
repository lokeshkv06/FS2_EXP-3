import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🏋️‍♂️ <span>Fitness App</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/workout">Workout</Link>
        <Link to="/diet">Diet</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Welcome to Fitness App</h1>
        <p>Your personal health companion</p>
      </div>
    </>
  );
}

function Workout() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Workout Plans</h1>
        <ul>
          <li>Chest & Triceps</li>
          <li>Back & Biceps</li>
          <li>Leg Day</li>
          <li>Chest & Back</li>
          <li>Leg Day</li>
          <li>Arms Day</li>
        
        </ul>
      </div>
    </>
  );
}

function Diet() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Diet Plans</h1>
        <ul>
          <li>High Protein Diet</li>
          <li>Weight Loss Diet</li>
          <li>Muscle Gain Diet</li>
          <li>Balanced Diet</li>
        </ul>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/diet" element={<Diet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
