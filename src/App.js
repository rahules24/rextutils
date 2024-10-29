import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[alert, setAlert] = useState(null);
  const showAlert=(msg, type)=>{
    setAlert({
      message:msg,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2f33';
      showAlert("Dark mode has been enabled", "warning")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className={`container my-3 text-${mode==='light'?'dark':'light'}`}>
        <Routes>
            <Route exact path="/rextutils" element={<TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/>}>
            </Route>
            <Route exact path="/rextutils/about" element={<About mode={mode} />}>
            </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
