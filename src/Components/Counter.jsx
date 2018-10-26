import React from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component {

 
  increment = ()=>{
    this.props.dispatch({type:'INCREMENT',index:this.props.index})
  }

 
  remove = () =>{
    this.props.dispatch({type:'REMOVE_COUNTER',index:this.props.index})
  }

  decrement = () => {
    this.props.dispatch({type:'DECREMENT',index:this.props.index})
  }

  render(){
    const pStyle = {
      color: this.props.counters[this.props.index].color,
      fontSize:'1.5rem',
      fontWeight:'bold'
      
    };
    return (
      <div className='counter'>
        <p style={pStyle}>Count:{this.props.counters[this.props.index].count}</p>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.remove}>Remove</button>
      </div>
    )
  }

}

const mapstateToProps = (state) => ({
  counters:state.counters,
})

export default connect(mapstateToProps)(Counter)