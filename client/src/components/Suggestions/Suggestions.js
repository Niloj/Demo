import React from 'react';
import Suggestion from './Suggestion';
import _ from 'underscore';

const Suggestions = props => {
  const renderSuggestionList = () => {
    if (_.isEmpty(props.suggestions)) {
      return (
        <div className="ui placeholder segment">
          <div className="ui icon header">
            <i className="frown outline massive icon" />
            Sorry, no Stack Overflow questions match tags related to this tweet.
          </div>
        </div>
      );
    } else {
      const sugs = _.toArray(props.suggestions);
      return sugs.map(sug => {
        return (
          <Suggestion
            title={sug.title}
            body={sug.body}
            link={sug.link}
            score={sug.score}
            key={sug.id}
            tags={sug.tags}
          />
        );
      });
    }
  };

  return <div className="ui segments">{renderSuggestionList()}</div>;
};

export default Suggestions;
