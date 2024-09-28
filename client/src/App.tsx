import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Home } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
