import React from 'react'
import { BsStopwatch } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
function Vote(props) {
    const navigate = useNavigate();
    return (
        <div class="row g-2">
            <div class="card" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(50 52 52)' : '#ecfcff', color: props.mode === 'dark' ? 'white' : 'black', maxWidth: "16rem", maxHeight: "16rem", border: "0px" }}>
                <div class="card-body">
                    <h7 class="card-subtitle mb-2">State</h7>
                    <h5 class="card-title">West Bengal</h5>
                    <br />
                    <h7 class="card-subtitle mb-2">Constituency</h7>
                    <h5 class="card-title">Balurghat</h5>
                    <br /><br /><br />
                    <p class="card-text">You have 2 minutes to vote. Vote ASAP.</p>
                    <div class="card" style={{ backgroundColor: '#dee2e6', width: "14rem", border: "0px" }}>
                        <div class="card-body">
                            <h4 class="card-subtitle mb-2"><BsStopwatch /><span style={{ paddingLeft: "10px" }}>1 min 35 sec</span></h4>
                        </div>
                    </div>
                </div>
                <div>
                    <span style={{ paddingLeft: "30px" }}></span>
                    <button type="submit" className="btn btn-danger" onClick={() => navigate("/voter")}>Back</button>
                </div>
            </div>
            <div className="container-sm" style={{ maxWidth: "1000px", maxHeigth: "1000px", paddingBottom: "1000px" }} >
                <div className="row g-4">
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "red", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "green", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "blue", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "yellow", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "orange", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "pink", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ paddingLeft: "100px", paddingTop: "10px", paddingBottom: "10px" }}>
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body" style={{ backgroundColor: "purple", color: "white" }}>
                                <h7 class="card-title">BJP</h7>
                                <h5 class="card-title">Tathagata Banerjee</h5>
                                <br />
                                <button type="submit" className="btn btn-primary" onClick={() => navigate("/")}>Vote Here</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vote
