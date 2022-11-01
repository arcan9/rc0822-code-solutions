import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.handleClickDot = this.handleClickDot.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(this.nextImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  previousImage() {
    const lastIndex = this.props.images.length - 1;
    let index = this.state.currentIndex;

    if (this.state.currentIndex === 0) {
      index = lastIndex;
    } else {
      index = this.state.currentIndex - 1;
    }
    this.setState({
      currentIndex: index
    });
  }

  nextImage() {
    const lastIndex = this.props.images.length - 1;
    let index = this.state.currentIndex;

    if (this.state.currentIndex === lastIndex) {
      index = 0;
    } else {
      index = this.state.currentIndex + 1;
    }
    this.setState({
      currentIndex: index
    });
  }

  handleClickDot(event) {
    const index = event.target.getAttribute('id');
    const parsedIndex = parseInt(index);
    this.setState({
      currentIndex: parsedIndex
    });
  }

  getDots() {
    return (
      this.props.images.map((element, index) => {
        let dotClassName = '';

        if (index === this.state.currentIndex) {
          dotClassName = 'solid';
        } else {
          dotClassName = 'regular';
        }
        return <i key={index}
        className={`fa-${dotClassName} fa-circle`}
        onClick={this.handleClickDot}
        id={index}>
        </i>;
      })
    );
  }

  render() {
    const imageUrl = this.props.images[this.state.currentIndex];

    return (
      <div className="container">
        <div className="left-arrow">
          <i className="fa-solid fa-chevron-left" onClick={this.previousImage}></i>
        </div>
        <div className="carousel">
          <img src={imageUrl} className="carousel-image"></img>
          <div className='dots-container'>
            {this.getDots()}
          </div>
        </div>
        <div className="right-arrow">
          <i className="fa-solid fa-chevron-right" onClick={this.nextImage}></i>
        </div>
      </div>
    );
  }
}
