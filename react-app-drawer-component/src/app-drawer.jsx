import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      list: [
        { id: 1, name: 'About' },
        { id: 2, name: 'Get Started' },
        { id: 3, name: 'Sign In' }
      ]
    };
    this.showModal = this.showModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  handleClick() {
    this.setState({
      showModal: false
    });
  }

  render() {
    let menuDisplay = 'hidden';
    let overlay = '';
    let bars = 'fa fa-bars';

    const listItems = this.state.list.map(item =>
      <li key={item.id} onClick={this.handleClick}>
        {item.name}
      </li>
    );

    if (this.state.showModal) {
      menuDisplay = '';
      overlay = 'apply-overlay';
      bars = 'fa fa-bars hidden';
    }

    return (
      <div className='container'>
        <div className='sidebar'>
          <div
          className={overlay}
          onClick={this.handleClick}>
          </div>
          <div className={`list-modal ${menuDisplay}`}>
            <div className='menu'>Menu</div>
            <ul>{listItems}</ul>
          </div>
        </div>
        <i
        className={bars}
        onClick={this.showModal}></i>
      </div>
    );
  }
}
