import React, { Component } from 'react'
import StyledComponent from './button'
import SimpleSlide from './image-slider'
import img_bg from '../images/img_bg.jpg'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight"><h2> This is a Test</h2>
            {/* <div className="overlay" /> */}
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12">
                    <h1>Hello!<br/>I'm Mark</h1>
                    <p><StyledComponent/></p>
                    <p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                    <p><a className="btn btn-primary btn-learn" href="https://github.com/Dhruv34788" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                    <p><a className="btn btn-primary btn-learn" href="https://medium.com/@dhruv.barochia34788" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
                  </div>
                </div>
              </div>
            </div>
          
        </section>
      </div>
    )
  }
}
