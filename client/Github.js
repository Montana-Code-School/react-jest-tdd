var React = require('react');

var Github = React.createClass({
  render: function render() {
    var commitInfo;
    var gitStuff = this.props.data.map(function gitMap(g) {
      if (g.coms) {
        commitInfo = g.coms.map(function commitMap(c) {
          return (
            <div>
              <p>{c.message}</p>
              <p>{c.url}</p>
            </div>
            );
        });
      }

      return (
        <div className="col-md-4">
          <div className="panel panel-default gitub-box">
            <h3 className="panel-header"><i className="fa fa-code-fork">
              </i> {g.repo}</h3>
            <div className="panel-body">
               {commitInfo}
            </div>
            <div className="panel-footer">
            <p> {g.timeStamp}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {gitStuff}
      </div>
    );
  },
});

module.exports = Github;
