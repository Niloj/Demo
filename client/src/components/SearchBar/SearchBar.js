import React from 'react';
import './SearchBar.css';
import SearchHelp from './SearchHelp';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.Submit(this.state.term);
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar">
        <form
          className="ui form"
          onSubmit={this.onFormSubmit}
          autoComplete="off"
        >
          <div className="field ui huge icon fluid input">
            {this.props.showHelp && <SearchHelp />}
            <input
              type="text"
              name="searchInput"
              placeholder="Search..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <i className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
