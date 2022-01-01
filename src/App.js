import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message ,
      type : type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=> {
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161616';
      showAlert("Dark Mode is enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled", "success");
    }
  }
  return (
    <>
    {/* <Navbar title ="textutils2" aboutText="Aboutus" />   */}
    <Router> 
    <Navbar title = "TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    <div className="container my-7">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <Textform heading="Enter your text to analyze" mode = {mode} showAlert={showAlert}/>
          </Route>
        </Switch>
        
    </div>
    </Router>
    </>
  );
}

export default App;
