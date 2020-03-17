import React, { Component } from 'react';


export default class CreateTree extends Component {
  
  handleChangePlus = () => {
     this.setState( state => {
       return { state: this.props.nodes[0].list = false }
     })
  }   

  render() {

    return (
      <>
        {
          this.props.nodes.map( node => (
              
              <ul 
                  key={node.id} 
                  style={{ paddingLeft: '30px' }}
              >

                { node.isLeaf ? <span onClick={ () => this.handleChange() }>+ {node.name}</span> : <li>{ node.name }</li> }

                { 
                  node.list
                  ? <>{ node.nodes && node.nodes.length ? <CreateTree nodes={ node.nodes } /> : null }</>
                  : null
                }

              </ul>

          ) )

        }
      </>
    );
  }

}


// { node.list ? <span onClick={ () => this.handleChangePlus() }>+ {node.name}</span> : <span onClick={ () => this.handleChangeMinus() }>- {node.name}</span> }
