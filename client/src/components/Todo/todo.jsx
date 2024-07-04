import React, { useState } from "react";
import styles from './todo.module.css';
import { VscCollapseAll } from "react-icons/vsc";
import { GoPlus } from "react-icons/go";
import Modal from 'react-bootstrap/Modal';



function Todo() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className={styles.page}>
        <div className={styles.Header}>
          <p>To do</p>
          <div className={styles.btn}>
            <button onClick={handleShow}><GoPlus />
            </button>
            <button><VscCollapseAll />
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} >
        <div className={styles.modal}> <div className={styles.Head}>
          <p>Title*</p>
          <input type="text" placeholder="Enter task title" value={title} className={styles.title}
            onChange={(e) => setTitle(e.target.value)} />
        </div>
          <div className={styles.middle}>
            <p>Select Priority*</p>
            <div className={styles.priority}>
              <button className={styles.high}>HIGH PRIORITY</button>
              <button className={styles.moderate}>MODERATE PRIORITY</button>
              <button className={styles.low}>LOW PRIORITY</button>
            </div>
          </div>

          <div className={styles.part}>
          <div className={styles.checkbox}>
            <p>Checklist(0/0)*</p>
            <button className={styles.add}>+ Add</button>
          </div>

          <div className={styles.footer}>
            <button className={styles.date}>Select Due Date</button>
            <div className={styles.btn2}>
              <button onClick={handleClose} className={styles.cancel}>cancel</button>
              <button className={styles.save}>Save</button>
            </div>
          </div>
          </div>
          
        </div>

      </Modal>
    </>
  )
};



export default Todo;
