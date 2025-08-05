import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Research from "@/pages/Research";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Research />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;