import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import {AboutMe, Interests, Experience, FuturePlans} from "./components/Pages";
import TopBanner from "./components/Title";

function App() {
  return (
    <>
    <TopBanner />
    <div id="main">
    <Navbar />
      <article >
        <Routes>
          <Route class="animate__animated animate__zoomIn" path="/" element={<AboutMe />} />
          <Route path="/interests" element={<Interests />}  />
          <Route path="/experience" element={<Experience />}  />
          <Route path="/futureplans" element={<FuturePlans />}  />
        </Routes>
      </article>
    </div>
    </>
  );
}

export default App;
