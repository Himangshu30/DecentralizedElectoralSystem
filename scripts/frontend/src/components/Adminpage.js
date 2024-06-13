import React from 'react'
import { Link } from 'react-router-dom'
function Adminpage(props) {
    return (
        <div className="container-sm" style={{maxWidth: "1000px", maxHeigth: "1000px"}} >
            <div className="row g-2">
                <div className="col-md-6" style={{paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <div className="card" style={{ width: "18rem"}}>
                        <img src="/voters.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white'}}>
                            <Link className="btn btn-primary" to="/admin/voter-list">View voter list</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="/candidates.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white'}}>
                            <Link className="btn btn-primary" to="/admin/candidate-list">View candidate list</Link>
                        </div>
                    </div>
                </div>          
                <div className="col-md-6" style={{paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="/addvoter.png" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white'}}>
                            <Link className="btn btn-primary" to="/admin/voter-registration">Add a voter</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="/addcandidate.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white'}}>
                            <Link className="btn btn-primary" to="/admin/candidate-registration">Add a candidate</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="/deletevoter.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white'}}>
                            <Link className="btn btn-primary" to="/admin/voter-deletion">Delete a voter</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px"}}>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="/detetecandidate.jpg" className="card-img-top" alt="..." />
                        <div className="card-body" style={{backgroundColor: props.mode === 'dark' ? '#495057' : 'white'}}>
                            <Link className="btn btn-primary" to="/admin/candidate-deletion">Delete a candidate</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Adminpage
