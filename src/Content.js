import $ from 'jquery';
import {Table,Button,Container,Modal} from 'react-bootstrap';
import {useState} from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Content = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    readURL('before');
    readURL('after');
  }

  const readURL = (inputId) => {
    const input = $(`#${inputId}`).get(0);
    
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $(`#modal-${inputId}`).attr('src', e.target.result).width(150).height(200);
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }

  const downloadAsImage = () => {
    domtoimage.toBlob($('#finalResult').get(0)) 
      .then(function (blob) {
        saveAs(blob, "finalresult.png");
      });
  }

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
              <td><input type="file" id="before"/></td>
              <td><input type="file" id="after"/></td>
              <td>
                <Button variant="primary" onClick={handleShow}>View</Button>{' '}
                {/* <Button variant="secondary">Download</Button>{' '} */}
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <Button variant="primary" className="mr-top-20">Add</Button> */}
        
        {/* modal starts */}
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Final Result</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <article id="finalResult">
              <div className="beforeAfter">
                <label>Before</label><br/>
                <img alt="before" src="#" id="modal-before"/>
              </div>
              <div className="beforeAfter">
                <label>After</label><br/>
                <img alt="before"src="#" id="modal-after"/>
              </div>
            </article>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="secondary" onClick={downloadAsImage}>Download</Button>
          </Modal.Footer>
        </Modal>
        {/* modal ends */}
      </Container>
    </>
  );
}

export default Content;