
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



// JSX is html and work also like Javascript niche JSX likhi hui hai function App me jo bs ek hi component
// return krti hai lekin me <> se kr skta hu return ek se jada
// Navbar is  a Component and we passing some props like title aboutText is called componet based webApp.
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          msg:message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>

      <Navbar title="Textutils" aboutText="About " mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
