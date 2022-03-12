import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { SingleCountry } from "./components/SingleCountry";

function App() {
  return (
    <div className="w-100% max-w-screen-2xl p-7 pl-10">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:code" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
