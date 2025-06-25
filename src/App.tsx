import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import Hero from './components/sections/Hero';
import Schools from './components/sections/Schools';
import Approach from './components/sections/Approach';
import Results from './components/sections/Results';
import Reviews from './components/sections/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Schools />
        <Approach />
        <Results />
        <Reviews />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
