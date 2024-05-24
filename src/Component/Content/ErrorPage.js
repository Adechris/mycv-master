import React from 'react'
import {Container} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'
import {FaBackspace } from 'react-icons/fa';
const ErrorPage = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(-1)
    }
  return (
    <Container>
        <div className=' error'>
            <h6>404 Not Found</h6>
        <h6 className='mt-3'>Page Not Available</h6>
        <div className='mt-5'>
        <button
        onClick={handleNavigate}
        className='btn btn-success text-uppercase'>
        <FaBackspace className='mx-2'/>
            Go back
        </button>
        </div>
        </div>
    </Container>
  )
}

export default ErrorPage;