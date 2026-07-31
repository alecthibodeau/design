import { useState, useEffect } from 'react';

/* Components */
import Entries from './components/Entries'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

/* Styles */
import './styles/app.css'
import './styles/floating-action-button.css'

function App() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const isAvailable: boolean = true;
  const scrolledPixelsTarget: number = 123;

  useEffect(() => {
    function handleScroll(): void {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {
        isAvailable ?
        <div className="app">
          <Header />
          <Nav />
          <Entries />
          <Footer />
          {
            scrollPosition > scrolledPixelsTarget ?
            <a href="#top" className="floating-action-button">Top</a> :
            null
          }
        </div> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App;
