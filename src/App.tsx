import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { SingleCountry } from "./components/SingleCountry";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:code" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
