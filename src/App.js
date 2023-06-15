
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Connection from './Components/Connection/Connection';
import Creation from './Components/Connection/Creation';
import Acceuil from './Components/Acceuil/Acceuil';

function App() {
  return (
    <div>
      {/* <Connection/> */}
      <Routes>
        <Route path='/' element={<Acceuil/>}/>
        <Route path='/AflamCom_Identification' element={<Connection/>}/>
        <Route path='/AflamCom_Creation_Du_Compte' element={<Creation/>}/>
      </Routes>
    </div>
  );
}

export default App;
