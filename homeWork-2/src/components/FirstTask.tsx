import { Component } from 'react';
import { TaskState } from '../models/models';

class FirstTask extends Component<{}, TaskState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Stepan',
            age: 25,
            isToggle: false,
        };
    }

    toggleHandler = () => {
        this.setState({
            name: 'Mykola',
            age: 30,
            isToggle: true,
        });
    };

    render() {
        return (
            <div>
                <p>Name: {this.state.name}, age: {this.state.age}</p>
                <button onClick={this.toggleHandler}>Click on me</button>
            </div>
        );
    }
}

export default FirstTask;



