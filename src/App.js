import './App.css';
import { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2b2f33';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar DD={123} title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
      <About/>
      <div className={`container my-3 text-${mode==='light'?'dark':'light'}`}>
        <TextForm heading="Enter Text" mode={mode}/>
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
