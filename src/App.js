import './App.css';
import { Body } from './Components/Body';
import {AuthProvider} from '../src/Utils/AuthContext'
import { Provider } from 'react-redux';
import appStore from './Utils/appStore';

  function App() {
    return (
      <Provider store={appStore}>
        <AuthProvider>
          <div className="App">
            <Body />
          </div>
        </AuthProvider>
      </Provider>
    );
  }

export default App;
