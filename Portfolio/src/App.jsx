import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import profilePic from "./assets/profile.jpg";

function Profile() {
  return (
    <>
      <img
        src={profilePic}
        alt="Profile"
        width="150"
        style={{ borderRadius: "50%" }}
      />

      <h1>KV Lokesh</h1>
      <h2>23BAI70415</h2>

      <Link
        to="/dashboard"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Go to Dashboard
      </Link>
    </>
  );
}

function Dashboard() {
  return (
    <>
     <h1 style={{ fontFamily: "Arial, sans-serif" }}>Skills</h1>

<ul style={{ fontFamily: "Georgia, serif", fontSize: "18px" }}>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React.js</li>
</ul>


      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "8px 15px",
          backgroundColor: "black",
          color: "white",
          textDecoration: "none",
          borderRadius: "5px"
        }}
      >
        Go to Home
      </Link>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
