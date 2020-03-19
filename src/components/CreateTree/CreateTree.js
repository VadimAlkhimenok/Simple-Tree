import React, { Component } from 'react';
import classes from './CreateTree.module.css';

export default class CreateTree extends Component {

  render() {

    return (
      <>
        {
          this.props.nodes.map( node => (
            
            <ul key={ node.id } className={ classes.TreeUl }>
              <>
                { 
                  node.list 
                  ?
                  <li key={ node.id }> 
                    <>{ node.list 
                      ? <span className={ classes.Change } onClick={ state => this.setState({ state: node.list = false }) }>- {node.name}</span> 
                      : <span>{ node.name }</span> }
                    </>
                    <>{ node.nodes && node.nodes.length 
                      ? <CreateTree nodes={ node.nodes } /> 
                      : null }
                    </>      
                  </li> 
                  : 
                  <>{ node.nodes && node.nodes.length 
                    ? <li><span className={ classes.Change } onClick={ state => this.setState({ state: node.list = true }) }>+ { node.name }</span></li> 
                    : <li className={ classes.TreeLi }>{ node.name }</li> }
                  </>
                }
              </>
            </ul>
          ) )
        }
      </>
    );

  };

};
