import React from 'react';
import PropTypes from 'prop-types';

class TextHighlighter extends React.Component {
  render() {
    const text = this.props.text;
    const keyword = this.props.keyword;

    const keywordRegex = new RegExp(keyword, 'gi');
    const parts = text.split(keywordRegex);

    const highlightedTextElement = parts.map((part, index, array) => {
      const keywordElement = index < array.length - 1 && (
        <span style={this.props.highlightStyle}>{keyword}</span>
      );
      return (
        <React.Fragment>
          {part}
          {keywordElement}
        </React.Fragment>
      );
    });

    return <span>{highlightedTextElement}</span>;
  }
}

TextHighlighter.propTypes = {
  text: PropTypes.string,
  keyword: PropTypes.string,
  highlightStyle: PropTypes.object
};
TextHighlighter.defaultProps = {
};

export default TextHighlighter;