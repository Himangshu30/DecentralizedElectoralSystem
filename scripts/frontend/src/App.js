import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';
import Voterlogin from './components/Voterlogin';
import Adminlogin from './components/Adminlogin';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./App.css";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  if (mode === 'light') {
    document.body.style.backgroundColor = '#ecfcff';
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = 'rgb(50 52 52)';
    } else {
      setMode('light');
      showAlert("Dark mode has been disabled", "success");
      document.body.style.backgroundColor = '#ecfcff';
    }
  }
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
    },
    {
      path: "/",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <div id="body" style={{ backgroundImage: 'url("/homepage-img.jpg")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", height: "100vh" }}><Home mode={mode} /></div>
      </>,
    },
    {
      path: "/about",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <About mode={mode} />
      </>,
    },
    {
      path: "/admin-log-in",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <Adminlogin mode={mode} />
      </>,
    },
    {
      path: "/voter-log-in",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        
        <Alert alert={alert} />
        <Voterlogin mode={mode} />
      </>,
    },

    {
      path: "/view-result",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <About />
      </>,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
export default App;
