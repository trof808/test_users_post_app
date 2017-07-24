import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Root from './containers/Root'
import { Provider } from 'react-redux';

const App = () => {
    return(
        <Router>
            <Route exact path='/' component={Root} />
        </Router>
        
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)