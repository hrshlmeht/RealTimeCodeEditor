import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import CodeEditor from './pages/CodeEditor'
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <> 
    <div>
      <Toaster
      position='top-center'
      toastOptions={{
        success: {
          theme: {
            primary : '#4aed88',
          }
        } 
      }}>

      </Toaster>
    </div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element= {<Home/>}></Route>
          <Route path = "/Editor/:roomId" element= {<CodeEditor/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
