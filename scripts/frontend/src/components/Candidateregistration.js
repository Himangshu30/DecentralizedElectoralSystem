import React from 'react'
import { useNavigate } from 'react-router-dom'
import Statesandconstituencies from './Statesandconstituencies';
function Candidateregistration(props) {
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <br />
      <div className="container-sm" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "900px" }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Candidate Registration</h1>
        <br /><br />
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Name" required />
          </div>
          <div className="col-md-6">
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'dark-input white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="D.O.B" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (e.target.type = "text")} required />
          </div>
          <div className="col-md-6">
            <label className="form-check-label" htmlFor="inlineRadio2" style={{ paddingLeft: "11px", paddingTop: "4px", color: props.mode === 'dark' ? 'white' : 'black' }}>Gender</label>
            <div className="form-check form-check-inline" style={{ paddingLeft: "56px", color: props.mode === 'dark' ? 'white' : 'black' }}>
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required />
              <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" required />
              <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
          </div>
          <div className="col-md-6">
            <input type="number" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Phone Number" required />
          </div>
          <div className="col-md-6">
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Post Office" required />
          </div>
          <div className="col-md-6">
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Police Station" required />
          </div>
          <div className="col-md-6">
            <input type="number" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Postal Code" required />
          </div>
          <div className="col-md-6">
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Political Affiliation" required />
          </div>
          <Statesandconstituencies mode={props.mode} />
          <div className="col-md-6">
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Iris ID" required />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={() => navigate("/admin")} >Register</button>
            <span style={{ paddingLeft: "10px" }}></span>
            <button type="submit" className="btn btn-danger" onClick={() => navigate("/admin")}>Back</button>
          </div>
        </form>
        <br />
      </div>
      <br />
      <br />
    </div>
  )
}

export default Candidateregistration
