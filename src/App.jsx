import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import Footer from './components/Footer';
import ShaderBackground from './components/ShaderBackground';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <ShaderBackground />
      <Header />
      <Hero />
      <ResearchSection />
      <Footer />
    </>
  );
}

export default App;
