import React ,{useState} from 'react'
import { Button, } from 'react-bootstrap';

export default function Buttons({ debitValue, creditValue, isEqual ,save}) {
    return (
        <>

            <Button variant="success" disabled={!isEqual} onClick={save}>Save</Button>{' '}
            <Button variant="info">{debitValue}</Button>{' '}
            <Button variant="warning">{creditValue}</Button>{' '}
            <Button variant="primary">See all Entrys</Button>{' '}
            <p style={{color:"red"}}>
                 {isEqual === true ? "" : "Total Debit Should Be equal to total credit" }
            </p>
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        </>
    )
}
