// src/app/page.tsx
import Navbar from '../../src/components/Navbar';
import About      from '../components/About';
import Work       from '../components/Work';
import Projects   from '../components/Projects';
//import Steam from '../components/Steam';
import Games from '../components/Games';
import Footer     from '../components/Footer';
//import ResearchDigest from '../components/ResearchDigest';
//import Strava from '../components/Strava'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
        <Work />
        <Projects />
        <Games />
        <Footer/>
      </main>
    </>
  );
}
