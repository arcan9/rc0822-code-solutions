import { React } from './index';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    let xMark = 'fa-solid fa-xmark red';
    const color = 'red';
    let validateText = 'A password is required';

    if (this.state.password.length > 0 && this.state.password.length < 8) {
      validateText = 'Your password is too short';
    }

    if (this.state.password.length >= 8) {
      validateText = '';
      xMark = 'fa-solid fa-check green';
    }

    return (
      <div>
        <form>
          <label>
            Password:
            <div className='row'>
              <input
                className='col-2'
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handlePassword}
              />
              <i className={`col-2 ${xMark}`}></i>
            </div>
          </label>
          <p className={`validate-text ${color}`}>{ validateText }</p>
        </form>
      </div>
    );
  }
}
