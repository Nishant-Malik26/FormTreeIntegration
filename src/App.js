import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ContainerState from './ContainerState';
import Error from './Error';
import GeoTree from './GeoTree';
import Login from './Login';
import Welcome from './Welcome';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    
    // <Route path="/" element={<Login/>}/>
    // <Route path="/welcome" element={<Welcome/>}/>
    // <Route path="/error" element={<Error/>}/>

    // </Routes>
    // </BrowserRouter>
    <ContainerState/>
  );
}

export default App;
