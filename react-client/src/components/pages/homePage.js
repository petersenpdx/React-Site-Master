import React, { Component } from 'react';
run 
class HomePage extends Component {
  render() {
    return (
      <section id="colorlib-hero" class="js-fullheight" data-section="home">
    <div class="flexslider js-fullheight">
        <ul class="slides">
          <li style="background-image: url(images/img_bg_1.jpg);">
            <div class="overlay"></div>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div class="slider-text-inner js-fullheight">
                      <div class="desc">
                            <h1>Hi! <br></br>I'm Mark</h1>
                            <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                <p><a class="btn btn-primary btn-learn">Download CV <em class="icon-download4"></em></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </li>
            <li style="background-image: url(images/img_bg_2.jpg);">
            <div class="overlay"></div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div class="slider-text-inner">
                            <div class="desc">
                                <h1>I am <br>a Designer</br></h1>
                                    <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>
                                    <p><a class="btn btn-primary btn-learn">View Portfolio <em class="icon-briefcase3"></em></a></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </ul>
    </div>
</section>

    )
  }
}

export default HomePage;