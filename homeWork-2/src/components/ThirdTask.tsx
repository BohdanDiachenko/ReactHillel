import { Component } from 'react';
import { TaskState } from '../models/models';

const SHOW_TEXT = 'показати';
const HIDE_TEXT = 'приховати';

class ThirdTask extends Component<{}, TaskState> {
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
        const buttonText = this.state.isToggle ? HIDE_TEXT : SHOW_TEXT;
        return (
            <div>
                <button onClick={this.toggleHandler}>{buttonText}</button>
                {this.state.isToggle && <p>Name: {this.state.name}, age: {this.state.age}</p>}
            </div>
        );
    }
}

export default ThirdTask;
