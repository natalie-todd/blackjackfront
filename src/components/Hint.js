import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class Hint extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div id="Hint" className="Hint">
                <Button id="hello" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Here's a Hint</ModalHeader>
                    <ModalBody>
                    Hit when your hand is 12-16 when the dealer has 7-Ace.
                </ModalBody>
                    {/* <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Got It</Button>
                    </ModalFooter> */}
                </Modal>
            </div>
        );
    }
}
export const HintContainer = connect(undefined)(Hint);