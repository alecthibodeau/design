import './App.css'

/* Components */
import GraphicDesign from './components/GraphicDesign'

function App() {
  const isAvailable: boolean = true;

  return (
    <>
      {
        isAvailable ?
        <GraphicDesign /> :
        <div>Nothing to see here</div>
      }
    </>
  )
}

export default App
