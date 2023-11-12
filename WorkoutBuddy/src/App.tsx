import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Home from "./pages/Home";
import WhatIsWB from "./pages/WhatIsWB";
import WhoAreWe from "./pages/WhoAreWe";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GetTheApp from "./pages/GetTheApp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/WorkoutBuddy/" element={<Home />} />
          <Route
            path="/WorkoutBuddy/What-is-Workout-Buddy"
            element={<WhatIsWB />}
          />
          <Route path="/WorkoutBuddy/Who-are-we" element={<WhoAreWe />} />
          <Route path="/WorkoutBuddy/Blog" element={<Blog />} />
          <Route path="/WorkoutBuddy/Contact" element={<Contact />} />
          <Route path="/WorkoutBuddy/Get-the-app" element={<GetTheApp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
