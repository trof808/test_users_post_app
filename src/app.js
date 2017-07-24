import React from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Root from './containers/Root'
import { Provider } from 'react-redux';
import {store} from './redux/store';

const App = () => {
    return(
        <Provider store={store}>
            <Router>
                <Route exact path='/' component={Root} />
            </Router>
        </Provider>
        
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('app')
)