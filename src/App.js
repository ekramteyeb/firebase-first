import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlidesShow from "./pages/SlidesShow";
import ArticlesShow from "./pages/ArticlesShow";
import Navigator from "./components/Navigator";
//import Contact from "./pages/Contact";
import NoPages from "./pages/NoPages";

 function App() {
  return (
    <div>
      <header className="App-header">
          <Navigator />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="slides" element={<SlidesShow />} />
          <Route path="articles" element={<ArticlesShow />} />
          <Route path="*" element={<NoPages />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App