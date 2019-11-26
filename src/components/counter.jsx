import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    formatCount(){
        const { count} = this.state
        return count === 0 ? "Zero" : count
    }

    handleIncrement = () => {
        console.log('increment clicked', this);
        this.setState({ count: this.state.count + 1})
    }
    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no tags!</p>
        return (<ul>
            { this.state.tags.map(tag => <li>{tag}</li>)}
        </ul>
        )
    }
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}
                className="btn btn-secondary">Increment</button>
                {/* { this.renderTags()} */}
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}
