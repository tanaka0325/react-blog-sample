import React from 'react';
import request from 'superagent';

const styles = {
  backgroundColor: 'Azure',
}

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

    this.loadArticleFromServer = this.loadArticleFromServer.bind(this);
  }

  loadArticleFromServer(){
    request
      .get(this.props.url)
      .end((err, res) => {
        if (err) {
          throw err
        }
        this.setState({data: res.body})
      })
  }

  componentDidMount() {
    this.loadArticleFromServer();
  }

  render() {
    const articleNodes = this.state.data.map((article) => {
      return (
        <div>
          <h2>{article.title}</h2>
          <p>{article.text}</p>
        </div>
      )
    })
    return (
      <div style={styles}>
        {articleNodes}
      </div>
    )
  }
}

export default Article;
