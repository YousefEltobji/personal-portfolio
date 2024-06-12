import './App.css';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import SkillsSection from './SkillsSection';
import AboutMe from './AboutMe';
import MyProjects from './MyProjects';
import Burger from './HamburgerMenu';

function App() {
  return (
    <div>
      <NavBar />
      <Burger />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <MyProjects />
    </div>
  );
}

export default App;
