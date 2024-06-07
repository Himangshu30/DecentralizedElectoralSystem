import React, { useState } from 'react'
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
function Adminlogin(props) {
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeOff)
      setType('password')
    }
  }
  return (
    <div>
      <br />
      <br />
      <div className="container-sm" style={{ backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "600px" }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Administrator Log In</h1>
        <br /><br />
        <form className="row g-3">
          <div className="col-md-12">
            <label htmlFor="adminuserid" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Admin Unique Id</label>
            <input type="text" className={`form-control input ${props.mode === 'dark' ? 'red-placeholder' : ''}`} id="adminuserid" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Abcde123!" required />
          </div>
          <div id="AdminUniqueIdHelpBlock" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black', userSelect: "none" }}>
            Your User Id must be atleast 8 characters long.
          </div>
          <div className="col-md-12">
            <label htmlFor="Password" className="form-label" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Password</label>
            <div className="input-group flex-nowrap">
              <input type={type} className="form-control" id="Password" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder="pass325@" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
              <span class="input-group-text" id="addon-wrapping" onClick={handleToggle}>
                <Icon class="absolute mr-10" icon={icon} size={25} />
              </span>
            </div>
          </div>
          <div id="PasswordHelpBlock" className="form-text" style={{ color: props.mode === 'dark' ? 'white' : 'black', userSelect: "none" }}>
            Your Password must be atleast 8 characters long.
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

export default Adminlogin