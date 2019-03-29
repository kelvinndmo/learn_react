import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal 
    isOpen={!!props.selectedOption}
    onRequestClose={props.clearOption}
    contentLabel="Selected Option"
    >
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.clearOption}>OK</button>
    </Modal>
)

export default OptionModal; 