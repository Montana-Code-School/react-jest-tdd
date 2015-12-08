import React from 'react';

class AccordionPane extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: props.data.showOnLoad};
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    var getContent = (function(item) {
      return !this.state.show ? '' : (
        <div className="accordion-content">
          {item.content}
        </div>
      );
    }).bind(this);

    var item = this.props.data;

    return (
      <div>
        <div className="accordion-header" onClick={this.toggle.bind(this)}>
          {item.name}
        </div>
        { getContent(item) }
      </div>
      );
  };
}

module.exports = AccordionPane;
