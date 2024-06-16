import React from 'react';
import { useNavigate } from 'react-router-dom';
import Statesandconstituencies from './Statesandconstituencies';
function Voterlogin(props) {
  const navigate = useNavigate();
  const toggle = props.toggleLoggedIn;
  return (
    <div>
      <br />
      <br />
      <div className="container-sm" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "650px" }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Voter Log In</h1>
        <br /><br />
        <form className="row g-3">
          <div className="col-md-12">
            <input type="number" className={`form-control input ${props.mode === 'dark' ? 'white-placeholder' : ''}`} id="AadharNumber" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Voter Unique ID" minLength={12} maxLength={12} required />
          </div>
          <Statesandconstituencies mode = {props.mode}/>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              Are you visually impaired ?
            </label>
          </div>
          <div className="col-12">
              <button type="submit" className="btn btn-primary" onClick={() => {navigate("/voter");toggle()}}>Log in</button>
          </div>
        </form>
        <br />
      </div>
      <br />
      <br />
    </div>
  )
}
export default Voterlogin
