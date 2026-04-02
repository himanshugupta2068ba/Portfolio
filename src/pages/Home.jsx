import About from '../components/About';
import Hero from '../components/Hero';
import DrawerAppBar from '../components/NavBar'
import ProjectSection from '../components/Projects';
import Skills from '../components/Skill';
import Achievements from '../components/Achievements';
import EducationPath from '../components/EducationPath';
import PersonalCTA from '../components/PersonalCTA';
import Contact from '../components/contact';
import Footer from '../components/footer';
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
      <DrawerAppBar /><br></br>
      <Hero />
      <About />
      <Achievements />
      <ProjectSection />
      <Skills />
      <EducationPath />
      <PersonalCTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;