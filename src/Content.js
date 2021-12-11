import $ from 'jquery';
import {Table,Button,Container,Modal} from 'react-bootstrap';
import {useState} from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { faEye, faEdit, faDownload, faArrowsAltV, faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    const beforeImg = $('#before').get(0);
    const afterImg = $('#after').get(0);

    if (beforeImg.files && beforeImg.files[0] && afterImg.files && afterImg.files[0]) {
      setShow(true);
      readURL(beforeImg, 'before');
      readURL(afterImg, 'after');
    } else {
      alert('Please select both images');
    }
  }

  const readURL = (input, id) => {
    let reader = new FileReader();

    reader.onload = function (e) {
      $(`#modal-${id}`).attr('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }

  const downloadAsImage = () => {
    domtoimage.toBlob($('#finalResult').get(0)) 
      .then(function (blob) {
        saveAs(blob, "finalresult.png");
      });
  }

  const handleLayout = (direction) => {
    console.log('direction: ', direction);
  }

  const handleEdit = (event) => {
    const $currTarget = $(event.currentTarget);
    $currTarget.siblings('label').addClass('hidden');
    $currTarget.siblings('input').removeClass('hidden');
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
                <Button variant="primary" onClick={handleShow}><FontAwesomeIcon icon={faEye} /> Preview </Button>{' '}
                {/* <Button variant="secondary">Download</Button>{' '} */}
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <Button variant="primary" className="mr-top-20">Add</Button> */}
        
        {/* modal starts */}
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Final Result </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <article id="finalResult">
              <section className="layout">
                <label>Layout</label>
                <div>
                  <FontAwesomeIcon icon={faArrowsAltV} onClick={() => handleLayout('v')}/>
                  <FontAwesomeIcon icon={faArrowsAltH} onClick={() => handleLayout('h')} className="deactive"/>
                </div>
              </section>
              <section className="before">
                <div className="labelEdit">
                  <label>Before</label>
                  <input type="text" className="form-control hidden" placeholder="Label you want"/>
                  <FontAwesomeIcon icon={faEdit} onClick={handleEdit}/> 
                </div>
                <img alt="before" src="#" id="modal-before"/>
              </section>
              <section className="after">
                <div className="labelEdit">
                  <label>After </label>
                  <input type="text" className="form-control hidden" placeholder="Label you want"/>
                  <FontAwesomeIcon icon={faEdit} onClick={handleEdit}/> 
                </div>
                <img alt="before"src="#" id="modal-after"/>
              </section>
            </article>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="secondary" onClick={downloadAsImage}><FontAwesomeIcon icon={faDownload} /> Download </Button>
          </Modal.Footer>
        </Modal>
        {/* modal ends */}
      </Container>
    </>
  );
}

export default Content;