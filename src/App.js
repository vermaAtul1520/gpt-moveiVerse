import './App.css';
import { Body } from './Components/Body';
import {AuthProvider} from '../src/Utils/AuthContext'

  function App() {
    return (
      <AuthProvider>
        <div className="App">
          <Body />
        </div>
      </AuthProvider>
    );
  }

export default App;
