import { useState, useEffect } from 'react';

/* Components */
import Entries from './components/Entries'
import FloatingActionButton from './components/FloatingActionButton';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

/* Styles */
import './styles/app.css'

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
            <FloatingActionButton /> :
            null
          }
        </div> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App;
