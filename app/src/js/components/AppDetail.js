import React from 'react';

import Header from './Header'
import Menu from './Menu'
import ArticleDetail from './ArticleDetail'

class AppDetail extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <ArticleDetail url={this.props.url} articleId="1" />
      </div>
    )
  }
}

export default AppDetail;
