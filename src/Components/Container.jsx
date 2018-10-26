import React, { Component } from 'react'
import Counter from './Counter'
import ToggleMe from '../Components/ToggleMe'
import {connect} from 'react-redux'

 class Container extends Component {
    
    addCounter = ()=>{
        this.props.dispatch({type:'ADD_COUNTER'})
    }

  render() {
    return (
        <React.Fragment>
            <ToggleMe />
            <div className="container">
                    {this.props.counters.map((counter,i)=>{
                        return <Counter key={i} index={i}/>
                    })}
                </div>
                <div className='buttons'>
                <button onClick={this.addCounter}>Add counter</button>
            </div>

        </React.Fragment>
    )
  }
}


const mapstateToProps = (state) => ({
    counters:state.counters
  })
  
export default connect(mapstateToProps)(Container)


