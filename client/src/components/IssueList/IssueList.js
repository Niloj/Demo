import React from 'react';
import Tweet from '../Tweet/Tweet';
import './IssueList.css';

class IssueList extends React.Component {
  renderTweetList = () => {
    return this.props.issues.map(tweet => {
      return <Tweet tweet={tweet} key={tweet.id} />;
    });
  };

  render = () => {
    if (this.props.issues.length === 0) return <div />;

    return (
      <div className="ui container">
        <h1 className="ui header issue-header">Issues</h1>
        <div style={{ maxWidth: 'unset' }} className="ui segments comments">
          {this.renderTweetList()}
        </div>
      </div>
    );
  };
}

export default IssueList;
