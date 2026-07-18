/* Components */
import Entries from './components/Entries'
import Footer from './components/Footer';
import Header from './components/Header';

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
          <Entries />
          <Footer />
        </div> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App
