import React from 'react'

function Hero() {
  return (
    <div className="partie">
        <div className="Design">
        <h5 className="my">MY FOCUS</h5>
        <hr/>
        <h5 className="me">UI/UX Design</h5>
        <h5 className="me">Responsive Design</h5>
        <h5 className="me">Web Design</h5>
        <h5 className="me">Mobile App Desing</h5>
        </div>

          <div className="code">
            <div className="html">
                <label for="HTML">HTML</label>
            <progress id="HTML" value="90" max="100"> 90% </progress>
            </div>
            <div className="html">
            <label for="CSS">CSS</label>
            <progress id="CSS" value="90" max="100"> 90% </progress>
            </div>
            <div className="html">
            <label for="Java">JavaScript</label>
            <progress id="Java" value="80" max="100"> 80% </progress>
            </div>
            <div className="html">
            <label for="React">React</label>
            <progress id="React" value="80" max="100" > 80% </progress>
            </div>
            <div className="html">
            <label for="Photoshop">Photoshop</label>
            <progress id="Photoshop" value="90" max="100"> 90% </progress>
            </div>
            <div className="html">
            <label for="Adobe">Adobe XD</label>
            <progress id="Adobe" value="80" max="100"> 80% </progress>
            </div>
            <div className="html">
            <label for="Node">Node.js</label>
            <progress id="Node" value="65" max="100"> 65% </progress>
            </div>
            <div className="html">
            <label for="wordPress">wordPress</label>
            <progress id="wordPress" value="50" max="100"> 50% </progress>
            </div>
          </div>
    </div>
    
  )
}

export default Hero