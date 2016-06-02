import React from 'react';
import { render } from 'react-dom'

import App from './components/App'
import AppDetail from './components/AppDetail'

render(
  <AppDetail url="http://localhost:3000/"/>,
  document.getElementById('content')
)
