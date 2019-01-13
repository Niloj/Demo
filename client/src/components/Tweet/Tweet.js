import './Tweet.css';
import React from 'react';
import Suggestions from '../Suggestions/Suggestions';
import SuggestionService from '../../apis/SuggestionService';

class Tweet extends React.Component {
  state = { showSuggestions: false, suggestions: [] };
  t = this.props.tweet;
  date = new Date(this.t.created_at).toLocaleDateString();
  avatar = this.t.user.profile_image_url_https;
  urls = this.t.entities.urls;
  url = this.urls.length > 0 ? this.urls[0].expanded_url : null;

  toggleSuggestions = () => {
    this.setState({ showSuggestions: !this.state.showSuggestions });
  };

  componentDidMount = () => {
    const tags = Object.assign(
      [],
      this.props.tweet.entities.hashtags.map(ht => {
        return ht.text;
      })
    ).join(';');

    SuggestionService.getQuestions(tags).then(questions => {
      this.setState({ suggestions: questions });
    });
  };

  render = () => {
    return (
      <div
        className={`ui verticle segment tweet 
          ${this.state.showSuggestions ? 'highlighted' : ''}`}
        onClick={this.toggleSuggestions}
      >
        <div className="comment">
          <a className="avatar" href={this.t.user.url}>
            <img src={this.avatar} alt={this.t.user.name} />
          </a>
          <div className="content">
            <a className="author" href={this.t.user.url}>
              {this.t.user.name}
            </a>
            <div className="metadata">
              <span className="date">{this.date}</span>
            </div>
            <div className="text">{this.t.text}</div>
            <div className="actions">
              {this.urls.length > 0 && (
                <a className="reply" href={this.url}>
                  Go to Tweet
                </a>
              )}
            </div>
          </div>
          {this.state.showSuggestions && (
            <Suggestions suggestions={this.state.suggestions} />
          )}
        </div>
      </div>
    );
  };
}

export default Tweet;
