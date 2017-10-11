import React, { Component, cloneElement } from 'react';
import propTypes from 'proptypes';

export default class State extends Component {
    static propTypes = {
        children: propTypes.element,
        store: propTypes.object
    };

    constructor(props) {
        super(props);

        this.stateStore = this.props.store;
        this.stateStore.subscribe(state => this.setState(state));
        this.state = this.stateStore.state;
    }

    render() {
        return (
            <div>
                {cloneElement(this.props.children, {
                    ...this.state
                })}
            </div>
        );
    }
}