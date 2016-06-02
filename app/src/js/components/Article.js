import React from 'react';

const styles = {
  backgroundColor: 'Azure',
}

class Article extends React.Component {

  render() {
    return (
      <div style={styles}>
        <h2>title</h2>
        <p>body</p>
      </div>
    )
  }
}

export default Article;
