
import { Component } from 'react';
import { TaskState } from '../models/models';

class SecondTask extends Component<{}, TaskState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: 'Stepan',
            age: 25,
            isToggle: false,
        };
    }

    toggleHandler = () => {
        this.setState((prevState) => ({
            isToggle: !prevState.isToggle,
        }));
    };

    render() {
        return (
            <div>
                <button onClick={this.toggleHandler}>Click on me</button>
                {this.state.isToggle && <p>Name: {this.state.name}, age: {this.state.age}</p>}
            </div>
        );
    }
}

export default SecondTask;
