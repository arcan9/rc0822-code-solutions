import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicTitle: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(title) {
    if (title === this.state.topicTitle) {
      this.setState({
        topicTitle: null
      });
    } else {
      this.setState({
        topicTitle: title
      });
    }
  }

  render() {
    const language = this.props.topics.map(topic => {
      return (
        <div key={topic.title} className='wrapper'>
          <h3 onClick={() => this.handleClick(topic.title)} className='title'>{topic.title}</h3>
          {
          this.state.topicTitle === topic.title
            ? (<p>{topic.info}</p>)
            : null
          }
        </div>
      );
    });

    return (
        <div className='accordion'>
          {language}
        </div>
    );
  }
}
