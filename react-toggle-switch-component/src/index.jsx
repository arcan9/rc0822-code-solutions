import React from 'react';
import ReactDOM from 'react-dom/client';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked
    });
  }

  render() {
    let text = 'OFF';

    if (this.state.isClicked) {
      text = 'ON';
    }

    return (
      <div>
        <div className="row">
          <div className="col-2">
            <label className="toggle-label">
              <input
                className="toggle-input"
                type="checkbox"
                onClick={this.handleClick}
              />
              <div className="toggle-bg"></div>
            </label>
          </div>
          <div className="col-2">
              <span>{text}</span>
          </div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToggleSwitch />);
