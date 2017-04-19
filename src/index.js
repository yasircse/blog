import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App'
import './index.css'
import reactTapEventPlugin from 'react-tap-event-plugin';

reactTapEventPlugin();


ReactDOM.render(<App />,document.getElementById('app'))