import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar DD={123} title="TextUtils" about="About Us"/>
      <About/>
      <div className="container my-3">
        <TextForm heading="Enter Text"/>
      </div>
      {/* <Navbar/> */}
    </>
  );
}

export default App;
