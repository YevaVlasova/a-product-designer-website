import './Home.scss';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Visual from '../../components/Visual/Visual';
import Featured from '../../components/Featured/Featured';
import Welcome from '../../components/Welcome/Welcome';

export default function Home() {
  return (
    <>
        <Welcome />
        <Featured />
        <Visual />
        <Projects />
        <Contact />
    </>
  );
}