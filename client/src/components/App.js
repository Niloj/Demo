import React from 'react';
import IssueList from './IssueList/IssueList';
import SearchBar from './SearchBar/SearchBar';
import IssueService from '../apis/IssueService';

class App extends React.Component {
  state = { tweets: [], dim: true };

  onSearchSubmit = term => {
    this.setState({ dim: false });
    IssueService.searchTwitter(term, 50)
      .then(tweets => {
        const filteredTweets = tweets.filter(
          t => t.entities.hashtags.length > 0
        );

        this.setState({ tweets: filteredTweets });
      })
      .catch(err => console.log(err));
  };

  render = () => {
    return (
      <div className="ui container App">
        <div
          className={`ui ${this.state.dim ? 'active' : 'disabled'} page dimmer`}
        >
          <div className="content">
            <h1 style={{ fontSize: '5em' }}>Search Twitter...</h1>
            <SearchBar Submit={this.onSearchSubmit} />
          </div>
        </div>

        {!this.state.dim && <SearchBar Submit={this.onSearchSubmit} showHelp />}
        <IssueList issues={this.state.tweets} />
      </div>
    );
  };
}

export default App;
