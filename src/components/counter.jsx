import React, { Component } from 'react'

export default class Counter extends Component {

    // state = {
    //     value: this.props.counter.value,
    // }

    formatCount(){
        const {  value } = this.props.counter
        return  value  === 0 ? "Zero" :  value 
    }

    // handleIncrement = () => {
    //     console.log('increment clicked', this);
    //     this.setState({ value: this.state.value + 1})
    // }

    
    // renderTags(){
    //     if(this.state.tags.length === 0) return <p>There are no tags!</p>
    //     return (<ul>
    //         { this.state.tags.map(tag => <li>{tag}</li>)}
    //     </ul>
    //     )
    // }

    checkCounter = counter => {
        console.log('counter', counter);
        
        if (counter.value > 0)
            return false
        else return true
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary">+</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} 
                        disabled={this.checkCounter(this.props.counter)}
                        className="btn btn-danger btn-sm m-2">-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2"
                    >x</button>
                
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
