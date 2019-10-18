import React, { Component } from 'react'

import Component1 from './functional/component1'

import Container1 from './containers/container1'
import Header from './containers/header'
import history from './utils/history'

import { Router, Route, Switch } from 'react-router'

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Container1}/>
                            <Route path="/component/:id" render={(props) => <Component1 {...props}/> }/>
                            
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Routes