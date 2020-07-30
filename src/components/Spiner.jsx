import React, { Component } from 'react'
import { Spinner } from 'react-bootstrap'


const spinner  = {
    display: 'flex',
    justifyContent : 'center',
    margin: '300px auto'
}
export default function LoadingSpinner() {
    return (
        <>
        <div className='container' style={spinner}>
            <h1>Loading...</h1>
            
            <Spinner className='ml-2' animation="grow" />
            <Spinner  className='ml-2'  animation="grow" />
            <Spinner   className='ml-2' animation="grow" />
    
        </div>
        </>
    )
}