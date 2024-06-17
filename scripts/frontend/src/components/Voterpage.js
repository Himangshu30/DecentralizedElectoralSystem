import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
function Voterpage(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card mb-3 container-sm" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white', maxWidth: "900px"}}>
  <div className="row g-0">
    <div className="col-md-4" style={{paddingLeft: "5px", paddingTop: "45px", paddingBottom: "100px", paddingRight: "20px", borderRight:`1px solid ${props.mode === 'dark' ? 'white' : 'black'}`, color: props.mode === 'dark' ? 'white' : 'black' }}>
      <img src="/defaultprofile.jpg" className="img-fluid rounded" alt="..."/>
      <h4 className="card-title" style={{paddingLeft: "20px", paddingTop: "10px"}}>Rounak Kundu</h4>
      <h5 className="card-title" style={{paddingLeft: "20px", paddingTop: "0px"}}><FaPhoneAlt /> +91 9907932133</h5>
    </div>
    <div className="col-md-8">
      <div className="card-body" style={{paddingLeft: "25px", paddingTop: "95px", color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h6 className="card-title"><FaLocationDot /> State : West Bengal, Constituency : Balurghat</h6>
        <h6 className="card-title"><BiMaleFemale /> Gender : Male</h6>
        <h6 className="card-title"><BsCalendarDate /> D.O.B : 21 Aug, 2003</h6>
        <h6 className="card-title"><IoHome /> Address : Prachya Bharati Road, Balurghat, West Bengal, 733101</h6>
        <br />
        <div style={{paddingTop: "180px"}}>
        <button type="submit" className="btn btn-primary" onClick={() => navigate("/vote")}>Cast a Vote</button>
        </div>  
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Voterpage
