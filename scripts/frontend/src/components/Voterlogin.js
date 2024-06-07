import React from 'react'

function Voterlogin(props) {
  return (
    <div>
      <br />
      <br />
      <div className="container-sm" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "600px" }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Voter Log In</h1>
        <br /><br />
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="AadharNumber" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black'  }}>Aadhar Number</label>
            <input type="number" className="form-control" id="AadharNumber" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="0000-1111-2222" minLength={12} maxLength={12} required />
            <div id="AadharNumberHelpBlock" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black', userSelect: "none" }}>
              Your Aadhar Number must be 12 digits long, contain only numbers.
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="DOB" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Date of Birth</label>
            <input type="date" className="form-control" id="DOB" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} required />
          </div>
          <div id="DOBHelpBlock" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black', userSelect: "none" }}>
            You must be 18+ years old.
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
              Are you visually impaired ?
            </label>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Log in</button>
          </div>
        </form>
        <br />
      </div>
    </div>
  )
}

export default Voterlogin
