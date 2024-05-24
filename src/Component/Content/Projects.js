import React, { useState } from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import MyProjects from './MyProjects';
const Projects = () => {
    const [allProjects, setAllprojects] = useState(MyProjects)
    return (
        <Container>
            <div className='project'>
                <p className='project-name'>my projects</p>
            </div>
            <Row className='mt-4'>
                {allProjects.map((item) => {
                    return <Col className=' mt-3' md={4} sm={3}    >
                        <a href ={item.link} style={{textDecoration:'none'}}>
                            <Card >
                                <Image src={item.image} height={300}/>
                                <Card.Body>
                                    <Card.Title className='text-success'>{item.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                })}
            </Row>



        </Container>
    )
}

export default Projects