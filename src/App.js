
import './App.css';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

function App() {
  const submit = () => {
    
  }

  return (
    <Container fluid style={{ height: '100%', marginTop: '4rem' }}>
      <Row style={{ height: '2rem' }}>
        <Col xs={{ offset: 4, span: 6 }} style={{backgroundColor: '#3f2b56'}} />
      </Row>
      <Row style={{ height: '4rem' }}>
        <Col xs={{ offset: 4 }} >
          <Image src='https://biotouchglobal.com/wp-content/uploads/2023/01/BioTouch-Logo-Color-No-Tagline-TM-300x58.png' />
        </Col>
        <Col>
          <h5>Email Signature Rebrand</h5>
        </Col>
      </Row>
      <Row style={{ height: '2rem' }}>
        <Col xs={{ offset: 4, span: 6 }} style={{backgroundColor: '#3f2b56'}} />
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <Col xs={{ span: 6, offset: 4 }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone #: </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Fax #:</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ backgroundColor: '#3f2b56' }}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default App;
