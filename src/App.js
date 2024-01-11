import './App.css';
import Header from './components/Header';
import MainComp from './components/MainComp';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [fontCol, setFontCol] = useState('dark')
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () =>{
    if(mode==='dark'){
      setMode('light')
      setFontCol('dark')
      document.body.style = 'background:#FBFBFB'
      showAlert(': Light mode has been enabled', 'success')
    
    }else{
      setMode('dark')
      setFontCol('light')  
      document.body.style = 'background:#212529'
      showAlert(': Dark mode has been enabled', 'success')
    }
  }
  return (
    <div className={`App bg-${mode} text-${fontCol}`}>


      <Router>
        <Header title="Edgeforce Solutions" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<MainComp mode={mode} />}/>
            {/* <Route index element={<Home />} /> */}
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/login" element={<Login />} />
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
