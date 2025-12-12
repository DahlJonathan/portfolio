import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Sync page with URL hash so refresh keeps the current view
  useEffect(() => {
    const validPages = ['home', 'projects', 'about'];
    const init = (hash) => {
      const page = (hash || '').replace('#', '') || 'home';
      if (validPages.includes(page)) {
        setCurrentPage(page);
      } else {
        // Ensure a hash exists for consistent refresh behavior
        window.location.hash = 'home';
      }
    };

    init(window.location.hash);

    const onHashChange = () => init(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page) => {
    window.location.hash = page;
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'about':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;

