import './App.css';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <MyProjects />
    </div>
  );
}

export default App;
