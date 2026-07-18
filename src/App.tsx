/* Components */
import Footer from './components/Footer';
import GraphicDesignEntries from './components/GraphicDesignEntries'
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
          <GraphicDesignEntries />
          <Footer />
        </div> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App
