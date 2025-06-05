// src/app/page.tsx
import Navbar from '../../src/components/Navbar';
import About      from '../components/About';
import Work       from '../components/Work';
import Projects   from '../components/Projects';
//import Steam from '../components/Steam';
//import Games from '../components/Games';
import Footer     from '../components/Footer';
import Skills    from '../components/Skills';
//import ResearchDigest from '../components/ResearchDigest';
//import Strava from '../components/Strava'
import Education from '../components/Education';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
        <Work />
        <Skills />
        <Projects />
        <Education />
        <Footer/>
      </main>
    </>
  );
}
