import React from 'react'
import { Button } from 'react-bootstrap'

export default function Debit({ inputFields, handleChange, handleRemove, handleAddField }) {
    return (
        <>
            {inputFields.map((inputField, index) => (
                <div key={index} >
                    <Button className='rounded-circle' variant="primary" onClick={handleAddField}>+</Button>&nbsp;&nbsp;&nbsp;
                    <input type="text" name="account" className='col-xs-offset-2' onChange={event => handleChange(index, event)} placeholder='Account Type' />
                    <input type="text" name="debit" onChange={event => handleChange(index, event)} placeholder='Debit Amount' />
                    <input type="text" name="credit" onChange={event => handleChange(index, event)} placeholder='Credit' />
                    <input type="text" name="discription" onChange={event => handleChange(index, event)} placeholder='discription'/>
                    &nbsp;&nbsp;&nbsp;<Button className='rounded-circle' variant="danger" onClick={() => handleRemove(index)}>-</Button>
                    <br /> <br />
                </div>

            ))}
        </>
    )
}
