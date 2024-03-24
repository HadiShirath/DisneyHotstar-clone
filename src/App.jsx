import Home from "./page/Home";
import LandingPage from "./page/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
