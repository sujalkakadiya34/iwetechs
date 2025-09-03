// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Bgimg from './Bgimg';
import AboutCompany from './AboutCompany';
import Service from './Service';
import Dealing from './Dealing';
import ReadySection from './ReadySection';
import Projects from './Projects';
import ProjectsGrid from './ProjectsGrid';

function App() {
  return (
      <>
        <Navbar /> 
        <Bgimg />
        <AboutCompany />
        <Service />
        <Dealing />
        <ReadySection />
        <Projects />
        <ProjectsGrid />
      </>
  );
}

export default App;
