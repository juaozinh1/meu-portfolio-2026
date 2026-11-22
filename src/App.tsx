import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Stack } from './components/Stack';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-cal text-tinta">
      <Navbar />
      <main className="max-w-6xl mx-auto px-5 md:px-8 pb-24 md:pb-32 space-y-24 md:space-y-36">
        <Hero />
        <Projects />
        <Stack />
        <Journey />
      </main>
      <Contact />
    </div>
  );
}
