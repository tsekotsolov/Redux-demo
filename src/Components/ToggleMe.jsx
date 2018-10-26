import React, { Component } from 'react'
import {connect} from 'react-redux'

 class TooggleMe extends Component {

    toggle = ()=>{
        this.props.dispatch({type:'TOGGLE'})
      }

  render() {

   let style={
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    margin: '1.5rem auto',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    color:'white',
    fontSize:'1rem',
    cursor:'pointer'
   }
  
   this.props.toggle?style.backgroundColor='green':style.backgroundColor='red'
  
   return (
      <div>
        <div style={style} onClick={this.toggle}>Press Me</div>
      </div>
    )
  }
}

const mapstateToProps = (state) => ({
    toggle:state.toggle,
  })

  
export default connect(mapstateToProps)(TooggleMe)