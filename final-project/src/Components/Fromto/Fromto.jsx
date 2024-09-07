import React from 'react'
import Location from './Fromto.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
  function Fromto(){
    return(
        <section ClassName="fromto">
            <div  className={Location.fromto}>
            
        <Container>
          <Row>
            <Col>Column 1</Col>
            <Col>Column 2</Col>
            <Col>Column 3</Col>
            <Col>Column 3</Col>
          </Row>
          <Row>
            <Col xs={5} lg={5}>Column 1 </Col>
            <Col xs={5} lg={5}>Column 2 </Col>
            <Col xs={2} lg={2}><Button>Continue</Button></Col>
          </Row>
         </Container>
         </div>
         </section>
   
      

    
    );
  }
  export default Fromto