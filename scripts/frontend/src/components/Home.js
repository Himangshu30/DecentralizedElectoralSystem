import React from 'react'
import Spancounter from './Spancounter'
function Home(props) {
  return (    
  <div>
      <section id="counts" className="homepagefooter">
      <div className="counterbody" style={{backgroundColor: props.mode === 'dark'? 'rgb(50 52 52)': 'aliceblue'}}>

        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <div className="counter"><Spancounter start="0" end="100" durationinseconds="3"/></div>
            <p className="countercaption" style={{color: props.mode === 'dark'? 'white': 'black'}}>Voters</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <div className="counter"><Spancounter start="0" end="1000" durationinseconds="3"/></div>
            <p className="countercaption" style={{color: props.mode === 'dark'? 'white': 'black'}}>Candidates</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <div className="counter"><Spancounter start="0" end="10002" durationinseconds="3"/></div>
            <p className="countercaption" style={{color: props.mode === 'dark'? 'white': 'black'}}>Parties</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <div className="counter"><Spancounter start="0" end="1500000001" durationinseconds="3"/></div>
            <p className="countercaption" style={{color: props.mode === 'dark'? 'white': 'black'}}>Constituencies</p>
          </div>
        </div>
      </div>
    </section>

  </div>
  )
}

export default Home

