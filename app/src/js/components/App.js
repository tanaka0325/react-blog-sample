import React from 'react';

import Header from './Header'
import Menu from './Menu'
import Article from './Article'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <Article url="http://localhost:3000/" />
      </div>
    )
  }
}

export default App;
