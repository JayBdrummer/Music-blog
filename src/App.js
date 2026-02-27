import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Main from "./pages/Main";
import DrumTalk from "./pages/DrumTalk";
import MusicTalk from "./pages/MusicTalk";
import MyBands from "./pages/MyBands";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router basename="/Music-blog">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/drumtalk" element={<DrumTalk />} />
          <Route path="/musictalk" element={<MusicTalk />} />
          <Route path="/mybands" element={<MyBands />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;