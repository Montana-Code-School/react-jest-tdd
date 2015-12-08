import React from 'react';
import Github from './Github';

class GitBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.loadGitData();
  }

  loadGitData() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function success(data) {
        this.setState({ data: data });
      }.bind(this),
      error: function error(err) {
        console.log(err);
      },
    });
  }

  render() {
    return (
      <div>
        <Github data={this.state.data}/>
      </div>
    );
  }
}

GitBox.propTypes = {url: React.PropTypes.string.isRequired};

module.exports = GitBox;
