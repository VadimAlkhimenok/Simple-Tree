import React, { Component } from 'react';
import classes from './Text.module.css';
import CreateTree from '../CreateTree/CreateTree';


export default class Text extends Component {

    state = [
        { name: 'Root', isLeaf: true, id: 1, list: true,
            nodes: [
                { name: 'Child 1', isLeaf: false, id: 2, },
                { name: 'Child 2', isLeaf: false, id: 3, },
                { name: 'Child 3', isLeaf: true, id: 4, list: true,
                    nodes: [
                        { name: 'GrandChild', isLeaf: false, id: 5, },
                    ],
                },
            ],      
        },
    ];  

    render() {
        return (
            <div className={ classes.Text }>                
                <CreateTree nodes={ this.state } />
            </div>
        )
    }
}
