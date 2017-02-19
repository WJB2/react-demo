/**
 * Created by MACHENIKE on 2017/2/19.
 */
import React from 'react'
import {Link} from 'react-router'

import app from '../../css/app.scss'

const App  = React.createClass({
    render(){
        return(
            <div className = "g-app">
                <ul className="m-header clearfix">
                    <li><Link to="/all" activeClassName = "active">all</Link></li>
                    <li><Link to="/list" activeClassName = "active">list</Link></li>
                </ul>
                {this.props.children}
            </div>
            )}

})

export default  App