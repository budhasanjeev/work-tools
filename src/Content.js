import {Table,Button,Container,Modal} from 'react-bootstrap';
import {useState} from 'react';
import logo from './logo.svg';

const Content = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container className="mr-top-20">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Before</th>
              <th>After</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="file"/></td>
              <td><input type="file"/></td>
              <td>
                <Button variant="primary" onClick={handleShow}>View</Button>{' '}
                <Button variant="secondary">Download</Button>{' '}
              </td>
            </tr>
          </tbody>
          <Button variant="primary" className="mr-top-20">Add</Button>
        </Table>
        
        {/* modal starts */}
        <Modal.Dialog show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header closeButton>
            <Modal.Title>Before/After</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <article>
              <fieldset>
                <legend>Before</legend>
                <img alt="before" src={logo}/>
              </fieldset>
              
              <fieldset>
                <legend>After</legend>
                <img alt="before" src={logo}/>
              </fieldset>
            </article>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="secondary">Download</Button>
          </Modal.Footer>
        </Modal.Dialog>
        {/* modal ends */}
      </Container>
    </>
  );
}

export default Content;