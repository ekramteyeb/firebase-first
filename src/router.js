import {  Routes as Switch , Route } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlidesShow from "./pages/SlidesShow";
import ArticlesShow from "./pages/ArticlesShow";
import Navigator from "./components/Navigator";
//import Contact from "./pages/Contact";
import NoPages from "./pages/NoPages";

 function Routes() {
  return (
    <div>
      <header className="App-header">
          <Navigator />
      </header>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="slides" element={<SlidesShow />} />
          <Route path="articles" element={<ArticlesShow />} />
          <Route path="*" element={<NoPages />} />
        </Switch>
    </div>
  );
}
export default Routes