import React from 'react';
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Menu />
        <Article />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        This is header.
      </header>
    )
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div>
        This is menu.
      </div>
    )
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>
        This is Article.
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('content')
)
