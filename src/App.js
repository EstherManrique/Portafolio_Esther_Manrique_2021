import MainNav from "./components/MainNav";
import HeroSlider from "./components/Hero/HeroSlider";
import TechSkills from "./components/Skills/TechSkills";
import SoftSkills from "./components/Skills/SoftSkills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Switch, Route, HashRouter } from "react-router-dom";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <HashRouter>
      <MainNav />
      <Switch>
        <Route exact path="/">
          <HeroSlider />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/skills">
          <TechSkills />
          <SoftSkills />
          <Footer />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/projects">
          <Projects />
          <Footer />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contacto">
          <Contacto />
          <Footer />
        </Route>
      </Switch>
      
    </HashRouter>
  );
}

export default App;
