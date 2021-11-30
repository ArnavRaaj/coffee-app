import React from 'react';
import {GiSpoon} from "react-icons/gi";

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    increase = () => {
        this.setState({
            count:this.state.count+1
        })
    };
    decrease = () => {
        this.setState({
            count:this.state.count>0 ? this.state.count-1 : 0
        })
    };
    render()
    {
        let {count}=this.state;
        return(
           <div class="counter-btn-container">      
            <button className="btn-dec" onClick = {this.decrease}>-</button>
            <h2 className="count-value"> {count} <GiSpoon className="giSpoon"/> </h2>
            <button className="btn-inc" onClick = {this.increase}>+</button>
          </div>          
        )
    }
}
export default Counter