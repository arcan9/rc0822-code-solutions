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
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    let ulList = 'display-menu';

    const listItems = this.state.list.map(item =>
      <li key={item.id}>
        {item.name}
      </li>
    );

    if (this.state.showModal) {
      ulList = '';
    }

    return (
      <div>
        <div>
          <ul className={ulList}>{listItems}</ul>
        </div>
        <button onClick={this.showModal}>Show Modal</button>
      </div>
    );
  }
}
