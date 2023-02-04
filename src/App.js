import { setHtml } from './baseHtml';
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';

function App() {
  const submit = async (event) => {
    event.preventDefault();

    postData()
      .then((data) => {
        console.log(data);
      });
    const html = setHtml(firstName, lastName, email, phone, fax, job);
    const blob = new Blob([html], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "Biotouch_Email_Signature.html";
    link.href = url;
    link.click();
  }

  async function postData(url = 'http://localhost:3001', data = { firstName: firstName, lastName: lastName }) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    return response.json();
  }

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');
  const [job, setJob] = useState('');

  return (
    <Container fluid style={{ height: '100%', marginTop: '4rem' }}>
      <Row style={{ height: '2rem' }}>
        <Col xs={{ offset: 3, span: 6 }} style={{ backgroundColor: '#3f2b56' }} />
      </Row>
      <Row style={{ height: '4rem' }}>
        <Col xs={{ offset: 3 }} >
          <Image src='https://biotouchglobal.com/wp-content/uploads/2023/01/BioTouch-Logo-Color-No-Tagline-TM-300x58.png' />
        </Col>
        <Col>
          <h5>Email Signature Rebrand</h5>
        </Col>
      </Row>
      <Row style={{ height: '2rem' }}>
        <Col xs={{ offset: 3, span: 6 }} style={{ backgroundColor: '#3f2b56' }} />
      </Row>
      <Row style={{ marginTop: '2rem' }}>
        <Col xs={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Enter First Name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone #: </Form.Label>
              <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter Phone #" />
              <Form.Text className="text-muted">
                (555) 555-5555
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Fax #:</Form.Label>
              <Form.Control value={fax} onChange={(e) => setFax(e.target.value)} type="text" placeholder="Enter Fax #" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Title:</Form.Label>
              <Form.Control value={job} onChange={(e) => setJob(e.target.value)} type="text" placeholder="Enter Job Title" />
            </Form.Group>
            <Button onClick={(e) => submit(e)} variant="primary" type="submit" style={{ backgroundColor: '#3f2b56' }}>
              Submit and Download
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>

  )
}

export default App;
