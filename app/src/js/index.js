import React from 'react';
import { render } from 'react-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        Hello world from App Component!!!!
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('content')
)
