import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Home Page
function Home() {
  return (
    <div className="page">
      <h1>Welcome to Our Website</h1>
      <p>
        Explore our website and learn how React Router works.
      </p>
      <Link to="/dashboard" className="button">
        Go to Dashboard
      </Link>
    </div>
  );
}

// Dashboard Page
function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      <div className="dashboard-box">
        <h3>My Dashboard</h3>
        <p>You can manage your activities here.</p>
      </div>
    </div>
  );
}

// Login Page
function Login() {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <p>Welcome back! Please login to continue.</p>

      <form>
        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

// Signup Page
function Signup() {
  return (
    <div className="form-container">
      <h1>Create Account</h1>
      <p>Sign up to get started.</p>

      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create a password"
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo">
          ReactApp
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="*"
          element={
            <div className="page">
              <h1>404 - Page Not Found</h1>
              <Link to="/">Go to Home</Link>
            </div>
          }
        />
      </Routes>

      <footer>
        <p>React Router Navigation App</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;