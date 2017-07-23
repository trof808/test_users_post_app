import React, { Component } from 'react';
import SquareBlock from './SquareBlock';

class Root extends Component {
    render() {
        const style = {
            padding: '20px'
        }
        return (
            <div className="ui stackable grid" style={style}>
                <SquareBlock />
            </div>
        )
    }
}

export default Root;