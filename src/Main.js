import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import SharePage from "./SharePage"; // SharePageを追加

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shared" element={<SharePage />} />
      </Routes>
    </Router>
  );
}

export default Main;
