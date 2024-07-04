import React, { useState } from 'react';
import styles from './login.module.css';
import Avatar from '../../assets/Art.png';
import { CiMail, CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { login } from '../../Services/auth';



function Login() {
    const [data, setData] = useState({
        email: "", password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        login(data).then((response) => {
            alert(`Welcome,${response.data.name}`);
            localStorage.getItem("token", response.data.token);
            localStorage.getItem("authId", response.data.authId);
            navigate("/Dashbord");
        });

    }

   // const handleNext = () =>{
  //      navigate("/Signup");
  //  }
    console.log(data);
    return (
        <>
            <div className={styles.page}>
                <div className={styles.left}>
                    <div className={styles.leftbox}>
                        <div className={styles.leftimg}>
                            {/*     <div className={styles.leftdot}></div> */}
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <div className={styles.leftcontent}>
                            <p className={styles.leftpara}> <span> Welcome aboard my friend</span> <br />
                                just a couple of clicks and we start</p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightbox}>
                        <div className={styles.Header}>
                            <p className={styles.rightp}>Login</p>
                        </div>
                        <div className={styles.form}>
                            <form onSubmit={handleLogin}
                            >

                                <div className={styles.inputGroup}>
                                    <CiMail />
                                    <input type="email"
                                        placeholder="Email"
                                        name='email'
                                        value={data.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.inputGroup}>
                                    <CiLock />
                                    <input type="password"
                                        placeholder="Password"
                                        name='password'
                                        value={data.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.rightbtn}>
                                    <button >Log in</button>
                                </div>
                            </form>
                        </div>
                        <div className={styles.bottom}>
                            <p>Have no Account yet ? </p>
                            <button onClick={ () => { navigate("/Signup")}}>Register</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login;
