import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfClicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numberOfClicks: this.state.numberOfClicks + 1
    });
  }

  render() {
    let btnClass = 'btn';

    if (this.state.numberOfClicks < 3) {
      btnClass = 'btn';
    } else if (this.state.numberOfClicks === 3 || this.state.numberOfClicks < 6) {
      btnClass = 'btn-dark-purple';
    } else if (this.state.numberOfClicks === 6 || this.state.numberOfClicks < 9) {
      btnClass = 'btn-light-purple';
    } else if (this.state.numberOfClicks === 9 || this.state.numberOfClicks < 12) {
      btnClass = 'btn-red';
    } else if (this.state.numberOfClicks === 12 || this.state.numberOfClicks < 15) {
      btnClass = 'btn-orange';
    } else if (this.state.numberOfClicks === 15 || this.state.numberOfClicks < 18) {
      btnClass = 'btn-yellow';
    } else if (this.state.numberOfClicks === 18) {
      btnClass = 'btn-white';
    }

    return <button className={`btn ${btnClass}`} onClick={this.handleClick}>Hot Button!</button>;
  }
}
