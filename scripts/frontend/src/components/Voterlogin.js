import React from 'react';
import { useEffect, useState } from 'react';
function Voterlogin(props) {
  const states = [
    { id: "1", name: "Andaman And Nicobar Islands" },
    { id: "2", name: "" }
  ];
  const constituencies = [
    { id: "1", stateId: "1", name: "" },
    { id: "2", stateId: "1", name: "" },
    { id: "3", stateId: "1", name: "" },
    { id: "4", stateId: "1", name: "" }
  ];
  const [state, setState] = useState([]);
  const [constituency, setConstituency] = useState([]);
  useEffect(() => {
    setState(states);
  },[])
  const handleState = (id) => {
    const dt = constituencies.filter(x => x.stateId === id);
    setConstituency(dt);
  }

  return (
    <div>
      <br />
      <br />
      <div className="container-sm" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "600px" }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Voter Log In</h1>
        <br /><br />
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="AadharNumber" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Voter Unique Id</label>
            <input type="number" className="form-control" id="AadharNumber" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="0000-1111-2222" minLength={12} maxLength={12} required />
            <div id="AadharNumberHelpBlock" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black', userSelect: "none" }}>
              Your User Id must be 10 digits long, contain only numbers.
            </div>
          </div>
          <div className="col-md-7">
            <label htmlFor="DOB" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>State or Union Territory</label>
            <select id="states" class="form-select" aria-label="Default select example" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={(e) => handleState(e.target.value)}>
              <option selected style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Select your State or Union Territory</option>
              {
                state && 
                state !== undefined ?
                state.map((st,index) => {
                  return(
                    <option key={index} value={st.id} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{st.name}</option>
                  )
                })
                : "No state"
              }
            </select>
          </div>
          <div className="col-md-5">
            <label htmlFor="DOB" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Constituency</label>
            <select id="constituencies" class="form-select" aria-label="Default select example" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
              <option selected style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>Select your Constituency</option>
              {
                constituency && 
                constituency !== undefined ?
                constituency.map((cnst,index) => {
                  return(
                    <option key={index} value={cnst.id} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{cnst.name}</option>
                  )
                })
                : "No constituency"
              }
            </select>
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
