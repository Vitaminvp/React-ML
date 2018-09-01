import React, { Component } from 'react';

class DropDown extends Component {
    constructor(){
        super();
        this.state = {
            isOpend: false
        }
    }
    toggleState = () => {
        this.setState({
           isOpend: !this.state.isOpend
        });
        console.log(this.state.isOpend);
    }
    render() {
        let toggleText;
        if(this.state.isOpend) toggleText = <div>This is text to show</div>;
        return (
            <div>
                <div className="" onClick={this.toggleState}>DropDown</div>
                {toggleText}
            </div>
    );
    }
}

export default DropDown;
