import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Suggestion = props => {
  return (
    <div className="ui verticle segment">
      <div className="ui right floated tiny statistic">
        <div className="value">{props.score}</div>
        <div className="label">Score</div>
      </div>
      <a
        className="ui header"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
      <div>
        <em>Tags: {[...props.tags].join(' ')}</em>
      </div>
      <div className="ui secondary segment">{ReactHtmlParser(props.body)}</div>
    </div>
  );
};

export default Suggestion;
