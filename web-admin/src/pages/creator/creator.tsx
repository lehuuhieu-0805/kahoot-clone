import React, { useState } from 'react'
import { Button, Form, FormControl, OverlayTrigger, Popover } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'
import styles from './creator.module.scss'

const Creator: React.FC = () => {
  const [file, setFile] = useState<any>();
  const [timeLimit, setTimeLimit] = useState<string>('20');
  const [point, setPoint] = useState<string>('standard');

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFile => {
      setFile(Object.assign(acceptedFile, {
        preview: URL.createObjectURL(acceptedFile[0])
      }))
    },
    multiple: false,
    noClick: true
  });

  const handleChangeTimeLimit = (e: React.ChangeEvent<HTMLElement>) => {
    console.log((e.target as HTMLInputElement).value);
    setTimeLimit((e.target as HTMLInputElement).value)
  }

  const handleChangePoint = (e: React.ChangeEvent<HTMLElement>) => {
    console.log((e.target as HTMLInputElement).value)
    setPoint((e.target as HTMLInputElement).value)
  }

  return (
    <div className={styles.body}>
      <div className={styles.row}>
        <div className={styles["row--left"]}>
          <div className={styles.active}>
            <p>1. Quiz</p>
            <div>
              <div className="fa-solid fa-trash-can"></div>
              <img src="https://assets-cdn.kahoot.it/builder/v2/assets/Question_type--Question.9a480bf0.svg" alt="hinhanh" width={150} />
            </div>
            <hr />
          </div>
          <div>
            <p>2. True Or False</p>
            <div>
              <div className="fa-solid fa-trash-can"></div>
              <img src="https://assets-cdn.kahoot.it/builder/v2/assets/Question_type--TrueFalse.381266bb.svg" alt="hinhanh" width={150} />
            </div>
          </div>
          <hr />
          <div className='d-flex justify-content-center'>
            <OverlayTrigger trigger='focus' placement='right' overlay={<Popover style={{ backgroundColor: '#efefef' }}>
              <Popover.Body className='row'>
                <Button variant='outline-secondary' style={{ marginBottom: 10 }}>Quiz</Button>
                <Button variant='outline-secondary'>True Or False</Button>
              </Popover.Body>
            </Popover>}>
              <Button variant='primary' style={{ fontWeight: 'bold' }}>Add question</Button>
            </OverlayTrigger>
          </div>
        </div>
        <div className={styles["row--center"]} >
          <div>
            <FormControl placeholder='Start typing your question' style={{ textAlign: 'center' }} />
          </div>
          <div>
            {/* <img src="https://phutungnhapkhauchinhhang.com/wp-content/uploads/2020/06/default-thumbnail.jpg" alt="hinhanh" width={622} height={433} style={{ margin: '0 auto' }} /> */}
            <div {...getRootProps()} style={{ margin: '0 auto', width: 622, height: 433, background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              {file &&
                <img
                  src={file.preview}
                  alt="hinhanh"
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview)
                  }}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', overflow: 'hidden' }} />}
              <input {...getInputProps()} />
              {!file && <p style={{ fontSize: 25 }}>Drag and drop file here</p>}
              {file &&
                <Button variant='secondary' style={{ position: 'absolute', right: 10, bottom: 10 }} onClick={() => {
                  URL.revokeObjectURL(file.preview)
                  setFile(null)
                }}>Remove</Button>
              }
            </div>
            {/* <input id="input-b1" name="input-b1" type="file" className="file" data-browse-on-zone-click="true"></input> */}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 10 }}>
            <div style={{ height: 128, background: 'white', display: 'flex', padding: 5 }}>
              <div style={{ background: 'red', flex: '10%', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 0, height: 0, borderLeft: '15px solid transparent', borderRight: '15px solid transparent', borderBottom: '30px solid white' }}></div>
              </div>
              <div style={{ display: 'flex', flex: '90%', alignItems: 'center' }}>
                <Form.Control type='text' placeholder='Add answer 1' style={{ border: 0, boxShadow: 'none' }} />
              </div>
            </div>

            <div style={{ height: 128, background: 'white', display: 'flex', padding: 5 }}>
              <div style={{ background: 'blue', flex: '10%', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 25, height: 25, background: 'white', transform: 'rotate(-45deg)' }}></div>
              </div>
              <div style={{ display: 'flex', flex: '90%', alignItems: 'center' }}>
                <Form.Control type='text' placeholder='Add answer 2' style={{ border: 0, boxShadow: 'none' }} />
              </div>
            </div>

            <div style={{ height: 128, background: 'white', display: 'flex', padding: 5 }}>
              <div style={{ background: 'yellow', flex: '10%', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 30, height: 30, background: 'white', borderRadius: '50%' }}></div>
              </div>
              <div style={{ display: 'flex', flex: '90%', alignItems: 'center' }}>
                <Form.Control type='text' placeholder='Add answer 3' style={{ border: 0, boxShadow: 'none' }} />
              </div>
            </div>

            <div style={{ height: 128, background: 'white', display: 'flex', padding: 5 }}>
              <div style={{ background: 'green', flex: '10%', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 25, height: 25, background: 'white' }}></div>
              </div>
              <div style={{ display: 'flex', flex: '90%', alignItems: 'center' }}>
                <Form.Control type='text' placeholder='Add answer 4' style={{ border: 0, boxShadow: 'none' }} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["row--right"]}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
              <div className='fa-solid fa-clock' style={{ fontSize: 20, paddingRight: 5 }}></div>
              <div style={{ fontWeight: 'bold' }}>Time limit</div>
            </div>
            <select className='form-select' id="select-time-limit" value={timeLimit} onChange={handleChangeTimeLimit} defaultValue={20}>
              <option value="5">5 seconds</option>
              <option value="10">10 seconds</option>
              <option value="15">15 seconds</option>
              <option value="20">20 seconds</option>
              <option value="30">30 seconds</option>
            </select>
            <hr />
            <div style={{ display: 'flex', alignItems: 'center', paddingBottom: 10 }}>
              <div className='fa-solid fa-star' style={{ fontSize: 20, paddingRight: 5 }}></div>
              <div style={{ fontWeight: 'bold' }}>Points</div>
            </div>
            <select className='form-select' id="select-points" defaultValue='standard' value={point} onChange={handleChangePoint}>
              <option value="standard">Standard</option>
              <option value="doublepoint">Double Points</option>
            </select>
          </div>
          <div>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='danger'>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creator