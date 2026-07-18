/* Components */
import Entries from './components/Entries'
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';

/* Styles */
import './styles/app.css'

function App() {
  const isAvailable: boolean = true;

  return (
    <>
      {
        isAvailable ?
        <div className="app">
          <Header />
          <Nav />
          <Entries />
          <Footer />
        </div> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App
