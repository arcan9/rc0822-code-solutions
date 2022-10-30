import { React } from './index';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      elapsedSeconds: 0
    };
    this.handleStart = this.handleStart.bind(this);
    this.reset = this.reset.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleStart() {
    if (this.state.isClicked) {
      clearInterval(this.intervalId);
      this.setState({
        isClicked: false
      });
      return;
    }

    if (!this.state.isClicked) {
      this.tick();
    }

    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  reset() {
    if (!this.state.isClicked) {
      clearInterval(this.intervalId);
      this.setState({
        elapsedSeconds: 0
      });
    }
  }

  tick() {
    this.intervalId = setInterval(() => {
      this.setState({
        elapsedSeconds: this.state.elapsedSeconds + 1
      });
    }, 1000);
  }

  render() {
    let playBtn = 'fa-solid fa-play';
    const count = this.state.elapsedSeconds;

    if (this.state.isClicked) {
      playBtn = 'fa-solid fa-pause';
    }

    return (
      <div className='container'>
        <div className="timer">
          <i className="fa-regular fa-circle"></i>
          <p className="count" onClick={this.reset}>
            {count}
          </p>
          <p>
            <i className={`play ${playBtn}`} onClick={this.handleStart}></i>
          </p>
        </div>
      </div>
    );
  }
}
