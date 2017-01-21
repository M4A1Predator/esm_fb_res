import React from 'react';
import {connect} from 'react-redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import routes from '../routes';

class AppRoutes extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
      
      return (
        <Router history={hashHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      );
    }
}

export default AppRoutes;