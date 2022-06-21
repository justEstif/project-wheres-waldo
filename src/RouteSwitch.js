import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./components/index";
import { NavBar } from "./components";
import { HighScorePage } from "./pages/index.pages";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/score" element={<HighScorePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
