import React, { useState } from 'react';
import styles from './dashboard.module.css';
import logo from '../../assets/codesandbox.png';
import { PiLayoutThin, PiDatabaseThin } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";
//import {useNavigate} from 'react-router-dom';
import Board from '../../components/Board/board';
import Analytics from '../../components/Analytics/ana';
import Setting from '../../components/Setting/setting';






function Dashboard() {
  const [currentPage, setCurrentPage] = useState('Board');
  // const navigate = useNavigate();

  const switchPage = () => {
    switch (currentPage) {
      case 'Board':
        return <Board />;
      case 'Analytics':
        return <Analytics />;
      case 'Setting':
        return <Setting />;
      default:
        return <Board />;
    }
  };

  return (
    <>
      <div className={styles.page}>
        <div className={styles.left}>
          <div className={styles.Header}>
            <img src={logo} alt="logo" />
            <h2>Pro Mange</h2>
          </div>
          <div className={styles.middle}>
            <div className={styles.items}>
              <div className={styles.board} onClick={() => setCurrentPage('Board')}>
                <span><PiLayoutThin /></span>
                Board
              </div>
              <div className={styles.ana} onClick={() => setCurrentPage('Analytics')}><span><PiDatabaseThin /></span>
                Analytics</div>
              <div className={styles.setting}
                onClick={() => setCurrentPage('Setting')}><span><CiSettings /></span>
                Setting</div>
            </div>
            <div className={styles.bottom}>
              <span><IoLogOutOutline /></span>
              Logout
            </div>
          </div>
        </div>
        <div className={styles.right}>
          {switchPage()}
        </div>
      </div>
    </>
  )
}

export default Dashboard;
