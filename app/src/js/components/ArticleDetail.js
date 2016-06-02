import React from 'react';
import request from 'superagent';

const styles = {
  backgroundColor: 'green',
}

class ArticleDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }

    this.loadArticleFromServer = this.loadArticleFromServer.bind(this);
  }

  loadArticleFromServer(){
    request
      .get(this.props.url + '/articles/' + this.props.articleId)
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
    return (
      <div style={styles}>
        <h2>{this.state.data.title}</h2>
        <p>
          {this.state.data.text}
        </p>
      </div>
    )
  }
}

export default ArticleDetail;
