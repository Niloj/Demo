import './SearchBar.css';
import React from 'react';
import qh from './queryHelper';

class SearchHelp extends React.Component {
  state = { helpVisible: false };

  renderHelp = () => {
    return qh.map(query => {
      return (
        <div className="ui row divided" key={query.Operator}>
          <div className="column">{query.Operator}</div>
          <div className="column">{query.Finds}</div>
        </div>
      );
    });
  };

  toggleHelper = () => {
    this.setState({ helpVisible: !this.state.helpVisible });
  };

  render = () => {
    return (
      <div className="search-help" onClick={this.toggleHelper}>
        <span className="help-icon">
          <i className="bordered inverted white question circle outline big icon" />
        </span>
        {this.state.helpVisible && (
          <div className="ui segment help-content">
            <div className="ui two column relaxed divided grid">
              <div className="ui row divided">
                <div className="ui header column">Search Query</div>
                <div className="ui header column">What it Finds</div>
              </div>
              {this.renderHelp()}
            </div>
          </div>
        )}
      </div>
    );
  };
}

export default SearchHelp;
