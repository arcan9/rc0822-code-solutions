import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImgIndex: 0
    };
  }

  startInterval() {
    this.timerId = setInterval(this.showNext, 3000);
  }

  stopInterval() {
    clearInterval(this.timerId);
  }

  showNext() {

  }

  nextImage() {
    const lastIndex = this.props.images.length - 1;
    const
  }

  render() {
    const imageUrl = this.props.images[this.state.counter];
    console.log(imageUrl);

    return (
      <div className="container">
        <div className="left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="carousel">
          <img src="../images/001.png" className="carousel-image"></img>
        </div>
        <div className="right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    );
  }
}
