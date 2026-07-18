/* Components */
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
        </div> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App
