var React = require('react');
var Github = require('./Github');

var GitBox = React.createClass({
  getInitialState: function getInitialState() {
    return {data: []};
  },

  loadGitData: function loadGitData() {
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
  },

  componentDidMount: function componentDidMount() {
    this.loadGitData();
  },

  render: function render() {
    return (
      <div>
        <Github data={this.state.data}/>
      </div>
    );
  },
});

module.exports = GitBox;
