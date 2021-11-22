import "./App.css";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import {AboutMe, Interests, Experience, FuturePlans, FunFacts} from "./components/Pages";
import TopBanner from "./components/Title";

function App() {
  return (
    <>
    <TopBanner />
    <div id="main">
    <Navbar />
      <article>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/interests" element={<Interests />}  />
          <Route path="/experience" element={<Experience />}  />
          <Route path="/future plans" element={<FuturePlans />}  />
          <Route path="/fun facts" element={<FunFacts />}  />
        </Routes>
      </article>
    </div>
    </>
  );
}

export default App;
