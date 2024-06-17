import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Home from './components/Home';
import Error from './components/Error';
import Voterlogin from './components/Voterlogin';
import Adminlogin from './components/Adminlogin';
import Viewresult from './components/Viewresult';
import Voterpage from './components/Voterpage';
import Adminpage from './components/Adminpage';
import Candidatelist from './components/Candidatelist';
import Voterlist from './components/Voterlist';
import Voterregistration from './components/Voterregistration';
import Candidateregistration from './components/Candidateregistration';
import Candidatedeletion from './components/Candidatedeletion';
import Voterdeletion from './components/Voterdeletion';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./App.css";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [loggedin, setLoggedIn] = useState('no');
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
  const toggleLoggedIn = () => {
    if (loggedin === 'no') {
      setLoggedIn('yes');
    } else {
      setLoggedIn('no');
    }
  }
  const router = createBrowserRouter([
    {
      errorElement: <Error />,
    },
    {
      path: "/",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="no" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <div id="body" style={{ backgroundImage: 'url("/homepage-img.jpg")', backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", height: "100vh" }}><Home mode={mode} /></div>
      </>,
    },
    {
      path: "/about",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="no" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <About mode={mode} />
      </>,
    },
    {
      path: "/admin-log-in",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="no" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Adminlogin mode={mode} loggedin="no" toggleLoggedIn={toggleLoggedIn}/>
      </>,
    },
    {
      path: "/voter-log-in",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="no" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Voterlogin mode={mode} loggedin="no" toggleLoggedIn={toggleLoggedIn}/>
      </>,
    },
    {
      path: "/view-result",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Viewresult />
      </>,
    },
    {
      path: "/voter",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Voterpage mode={mode} />
      </>,
    },
    {
      path: "/admin",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Adminpage mode={mode} />
      </>,
    },
    {
      path: "/admin/voter-list",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Voterlist mode={mode}/>
      </>,
    },
    {
      path: "/admin/candidate-list",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Candidatelist mode={mode}/>
      </>,
    },
    {
      path: "/admin/voter-registration",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Voterregistration mode={mode} />
      </>,
    },
    {
      path: "/admin/candidate-registration",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Candidateregistration mode={mode} />
      </>,
    },
    {
      path: "/admin/voter-deletion",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Voterdeletion />
      </>,
    },
    {
      path: "/admin/candidate-deletion",
      element: <>
        <Navbar mode={mode} toggleMode={toggleMode} loggedin="yes" toggleLoggedIn={toggleLoggedIn}/>
        <Alert alert={alert} />
        <Candidatedeletion />
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
