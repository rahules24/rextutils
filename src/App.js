import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      // setInterval(() => {
      //   document.title= "TextUtils Amazing"
      // }, 220);
      // setInterval(() => {
      //   document.title= "Download Now"
      // }, 300);
      document.title= "TextUtils- Dark"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title= "TextUtils- Light"
    }
  }
  return (
    <>
      <Navbar DD={123} title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <About/>
      <div className={`container my-3 text-${mode==='light'?'dark':'light'}`}>
      <Alert alert={alert}/>
        <TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
