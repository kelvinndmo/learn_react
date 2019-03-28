import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <ol>
                {
                    props.options.map((option) => < Option key={option} handleDeleteOption={props.handleDeleteOption} optionText={option} />)
                    
                }
                <button onClick={props.handleDeleteOptions}>Remove all</button>
            </ol>
        </div>
    )
}

export default Options;