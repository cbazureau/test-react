import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery from './components/Gallery';

/**
 * App
 * @returns 
 */
const App = () => {
  return (
    <>
      <div className="Mockup">
        <a href="https://www.lebeaujeu.com/test/mobile.png" target="_blank">
          Maquette mobile
        </a>
        {" / "}
        <a href="https://www.lebeaujeu.com/test/desktop.png" target="_blank">
          Maquette desktop
        </a>
      </div>
      <div className="Container">
        <Gallery />
      </div>
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
