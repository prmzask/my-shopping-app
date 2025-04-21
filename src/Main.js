import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  );
}

export default Main;
