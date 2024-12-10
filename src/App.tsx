import { Intro } from './components/Intro';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className="font-body bg-background text-primary">
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;