import React from 'react'
import image from '../public/image.png'

function Navbar() {
  return (
    <div><div className="allnav">  
    <div>
        <img src={image} alt="" className="img1" />
    </div>
    <div className="a1">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
    </div>
    <div className="i1">
         <i className='bx bxl-linkedin-square' ></i>
        <i className='bx bxl-facebook'></i>
        <i className='bx bxl-twitter'></i>
       
    </div>
  </div>
   
<div class="image">
        <div className="tex">
            <h1 className="kati"> Katie Reed</h1>
        <p className="web"> Web Developer & Designer </p>
        <button className="mo"> CONTACT ME </button>
        </div>
    </div>
<section className="about"> 
        <div className="div">
            <strong > About Me </strong>
        </div>
        <div className="div1">
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
               Stet clita kasd gubergren, no sea takimata sanctus est. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo.</p> <br />
            <button> Download Resume </button>
        </div>
</section>
 <div className="all">
    <div className="SKILLS"></div>
    <div className="texte">
        <h1 className="sk">Skills</h1>
        <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
    </div>
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
    </div>
<div>       
<div className="card1">
    <h3>Portfolio</h3>
    <div className="card">
        <div className="ka">
            <div className=" p1">
                <h2>WEB DESIGN </h2>
                <hr />
            </div>
            <div className="p2">
                <h2>MOUBILE DESIGN</h2>
                <hr />
            </div>
            <div className="p3">
                <h2>LOGO DESIGN</h2>
                <hr />
            </div>
        </div>
        <div className="kb">
            <div className="p4">
                <h2>WEB APPLICATION DEVLOPMENT</h2>

            </div>
            <div className="p5">
                <h2>MOUBILE APPLICATION DEVLOPMENT</h2>

            </div>
            <div className="p6">
                <h2>PWA DEVLOPMENT</h2>

            </div>
        </div>
    </div>
</div> 
</div>
 <div className="all2">
    <div className="get">
        <p className="pn">GET IN TOUCH</p>
        <h6><i className='bx bxs-envelope'></i>Kr12@hotmail.com</h6>
        <h6 className="numb"><i class='bx bxs-phone-call' ></i>717-515-5799</h6>
    </div>
    <div>
        <button className="button">Contact Me</button>
        
    </div>
    <div className="copy">
        <div className="c">
            <i className='bx bxl-linkedin-square' ></i>
        <i className='bx bxl-facebook'></i>
        <i className='bx bxl-twitter'></i>
        </div>
        <div>
            <h6>copyright <i className='bx bx-copyright'></i> 2019 KR</h6>
        </div>

    </div>
  </div>
  </div>
  
  )
}

export default Navbar