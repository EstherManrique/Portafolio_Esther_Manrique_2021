import MainNav from './components/MainNav';
import HeroSlider from './components/Hero/HeroSlider';
import TechSkills from './components/TechSkills/TechSkills';
import {Switch, Route, HashRouter } from "react-router-dom";
import Footer from './components/Footer';
import Projects from './components/Projects';


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
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Switch>
      <Footer />
    </HashRouter>
      

    
  );
}

export default App;
