import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div style={{ height: "58px" }}>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ borderBottom: "2px solid var(--bs-gray-500)" }}>
                <div className="container-fluid">
                    <h1 className="navbar-brand " to="/">DeCentralized EVoting</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loggedin === 'yes' ? 'disabled' : 'active'}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${props.loggedin === 'yes' ? 'disabled' : 'active'}`} to="/about">About</Link>
                            </li>
                            {(props.loggedin === "no") && 
                            <>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Log In
                                </Link>
                                <ul className="dropdown-menu" data-bs-theme={`${props.mode === 'dark' ? 'dark' : 'light'}`}>
                                    <li><Link className="dropdown-item" to="/admin-log-in">Administrator Log In</Link></li>
                                    <li><Link className="dropdown-item" to="/voter-log-in">Voter Log In</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true" to="/view-result">View Result</Link>
                            </li>
                            </>
                            }
                            {(props.loggedin === "yes") && 
                            <>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" onClick={props.toggleLoggedIn}>Log Out</Link>
                            </li>
                            </>
                            }
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            {(props.mode === 'dark') && <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} checked/>}
                            {(props.mode === 'light') && <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: "pointer" }} />}
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
