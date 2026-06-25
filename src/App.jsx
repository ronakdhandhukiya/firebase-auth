import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPages from "./AuthPages";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Protected from "./Protected";

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/authentication" element={<AuthPages />} />
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" 
    element={
    <Protected>
      <Dashboard />
    </Protected>
  }
/>
  </Routes>
</BrowserRouter>
  );
}

export default App;