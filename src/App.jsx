import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import Footer from './components/Footer';
import ShaderBackground from './components/ShaderBackground';
import LoadingScreen from './components/LoadingScreen';
import AboutPage from './components/AboutPage';
import DownloadPage from './components/DownloadPage';
import ReleasesPage from './components/ReleasesPage';
import PricingPage from './components/PricingPage';
import BlogPage from './components/BlogPage';
import UseCasesPage from './components/UseCasesPage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (currentHash === '#/about') return <>{isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}<AboutPage /></>;
  if (currentHash === '#/download') return <>{isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}<DownloadPage /></>;
  if (currentHash === '#/releases') return <>{isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}<ReleasesPage /></>;
  if (currentHash === '#/pricing') return <>{isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}<PricingPage /></>;
  if (currentHash === '#/blog') return <>{isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}<BlogPage /></>;
  if (currentHash === '#/use-cases') return <>{isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}<UseCasesPage /></>;

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
