import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import styles from './header.module.scss'

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const location = useLocation()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname])

  return (
    <>
      <div className={styles.header}>
        <div className={styles['header--left']}>Kahoot!
          {location.pathname === '/creator' &&
            <Form.Control type='text' placeholder='Enter kahoot title ...' style={{ marginLeft: 10 }} />
          }</div>
        {location.pathname === '/home' &&
          <div className={styles['header--right']}>
            <Button variant="primary" onClick={handleShow}>
              Create
            </Button>
            <div className='fa-solid fa-user'></div>
          </div>
        }
        {location.pathname === '/creator' &&
          <div style={{ gap: 30 }}>
            <Button variant="danger" onClick={handleShow} style={{ marginRight: 10 }}>
              Exit
            </Button>
            <Button variant="primary" onClick={handleShow}>
              Save
            </Button>
          </div>
        }
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={styles.modal}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a new course</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modal__body}>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                  <Form.Label style={{ fontWeight: 'bold' }}>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter course title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label style={{ fontWeight: 'bold' }}>Description (Optional)</Form.Label>
                  <Form.Control as='textarea' rows={3} placeholder="Let learners know what to expect in this course" />
                </Form.Group>
              </Form>
            </Col>
            <Col style={{ position: 'relative' }}>
              <div className='mb-2' style={{ fontWeight: 'bold' }}>Cover Image</div>
              <Button variant='light' style={{ position: 'absolute', bottom: 3, right: 15, overflow: 'hidden', cursor: 'default' }}>
                Upload
                <input type="file" name='file' style={{ position: 'absolute', bottom: 0, right: 0, opacity: 0, fontSize: 20, cursor: 'pointer' }} />
              </Button>
              <Card.Img src="https://firebasestorage.googleapis.com/v0/b/pegoda-6de8a.appspot.com/o/images%2F1649724403586.278.jpg?alt=media" />
              {/* <div style={{ width: 370, height: 231, backgroundColor: 'gray' }}></div> */}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary">Create</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Header