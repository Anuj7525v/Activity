import React, { useState } from 'react';
import styles from "./signup.module.css";
import Avatar from "../../assets/Art.png";
import { CiUser, CiMail, CiLock } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { signup } from '../../Services/auth';


function Signup() {
    const [data, setData] = useState({
        name: "",
        email: "",
        confirmpassword: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        });
    };
    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await signup(data);
        alert(response.data);
        navigate("/login");
    };
    console.log(data);

    return (<>

        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.leftbox}>

                    <div className={styles.leftimg}>
                        {/*<div className={styles.leftdot}></div>*/}
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div className={styles.leftcontent}>
                        <p className={styles.leftpara}> <span>Welcome aboard my friend </span><br />just a couple of clicks and we start</p>

                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.rightbox}>
                    <div className={styles.Header}>
                        <p className={styles.rightp}>Register</p>
                    </div>
                    <div className={styles.form}>
                        <form onSubmit={handleSignup}>
                            <div className={styles.inputGroup}>
                                <CiUser />
                                <input type="text"
                                    placeholder="Name"
                                    name='name'
                                    value={data.name}
                                    onChange={handleChange}
                                />
                            </div>
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
                                    placeholder="Confirm Password"
                                    name='confirmpassword'
                                    value={data.confirmpassword}
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
                                <button >Register</button>
                            </div>
                        </form>
                    </div>
                    <div className={styles.bottom}>
                        <p>Have a Account</p>
                        <button onClick={() => {navigate("/Login")}}>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Signup;
