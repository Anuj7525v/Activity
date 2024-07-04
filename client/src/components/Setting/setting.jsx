import React, { useState } from 'react';
import styles from './setting.module.css';
import { CiUser,CiMail , CiLock } from "react-icons/ci";
import { updatepassword } from '../../Services/auth';

function Setting() {
  const [name, setName] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updatepassword(name, updateEmail, oldPassword, newPassword)
     .then(() => {
       alert('Password updated successfully');
      // setName('');
     //  setUpdateEmail('');
     //  setOldPassword('');
     //  setNewPassword('');
     })
     .catch((error) => {
        alert('Error updating password:'+ error.message);
      });
  };
  return (
    <div className={styles.page}>
      <div className={styles.header}><h3>Settings</h3></div>

      <div className={styles.box}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <CiUser />
              <input type="text"
                placeholder="Name"
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
                                <CiMail />
                                <input type="email"
                                    placeholder="Update Email"
                                    name='updateEmail'
                                    value={updateEmail}
                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                />
                            </div>

            <div className={styles.inputGroup}>
              <CiLock />
              <input type="password"
                placeholder="Old Password"
                name='oldPassword'
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className={styles.inputGroup}>
              <CiLock />
              <input type="password"
                placeholder="New Password"
                name='newPassword'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className={styles.btn}>
              <button >Update</button>
            </div>
          </form>
        </div >
      </div>
   </div>
  );


};

export default Setting;