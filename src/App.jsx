import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Results from "./pages/Results";
import Programs from "./pages/Programs";
import Pricing from "./pages/Pricing";
import FAQs from "./pages/FAQs";
import Blog from "./pages/Blog";
import About from "./pages/About";




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;