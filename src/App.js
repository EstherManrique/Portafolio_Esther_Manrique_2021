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
        <Route exact path="/tech-skills">
          <TechSkills />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/soft-skills">
          <SoftSkills />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
