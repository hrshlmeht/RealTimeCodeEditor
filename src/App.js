import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home';
import CodeEditor from './pages/CodeEditor'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element= {<Home/>}></Route>
          <Route path = "/Editor/:roomId" element= {<CodeEditor/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
