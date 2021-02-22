import MainNav from './components/MainNav';
import HeroSlider from './components/Hero/HeroSlider';
import TechSkills from './components/TechSkills/TechSkills';


function App() {
  return (
    <div>
      <MainNav />
      <HeroSlider />
      <div className="container">
        <h1 className="tech-skills">Tech Skills</h1>
        <h2>HTML</h2>
        <TechSkills done="80" />
        <h2>CSS</h2>
        <TechSkills done="65" />
        <h2>Javascript</h2>
        <TechSkills done="50" />
        <h2>React</h2>
        <TechSkills done="35" />
        <h2>Vue</h2>
        <TechSkills done="20" />
        <h2>Bootstrap</h2>
        <TechSkills done="75" />
      </div>

    </div>
  );
}

export default App;
