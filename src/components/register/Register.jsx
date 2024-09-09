import React, { useState, useEffect } from 'react'

import './register.css'

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [lemail, setLEmail] = useState('')
    const [lpassword, setLPassword] = useState('')

    //-----------for animation-------------
    const showSignUp = ()=>{
        document.getElementById("container").classList.add("sign-up-mode");
    }
    const showSignIn = ()=>{
        document.getElementById("container").classList.remove("sign-up-mode");
    }
    //-------------------------------------

    
    //const Navigate=useNavigate()
    useEffect(() => {
        const oth = localStorage.getItem('user')
        if (!oth) {
            //Navigate('/')
            console.log(oth);
            
            console.log("hiii");
            
            showSignUp();
        }
    }, [])

    const handelSignUp = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:4000/register', {

            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                // "Accept":"application/json",
                'Content-Type': 'application/json',
                // 'Content-Length': "",
            },

        })
        result = await result.json()
        console.log(result['message']);
        if (result['message']==='success') {
            showSignIn();
        }

        /*if (result.name) {
            localStorage.setItem("user",JSON.stringify(result))
            
            //Navigate('/')
        }
        else{
            alert("enter coeerct email or password")
        }*/
    }
    const handelLogIn = async () => {
        console.warn(email, password);
        let result = await fetch('http://localhost:4000/login', {

            method: 'put',
            body: JSON.stringify({ email : lemail, password : lpassword }),
            headers: {
                // "Accept":"application/json",
                'Content-Type': 'application/json',
                // 'Content-Length': "",
            },

        })
        result = await result.json()
        console.log(result);

        /*if (result.name) {
            localStorage.setItem("user",JSON.stringify(result))
            
            //Navigate('/')
        }
        else{
            alert("enter coeerct email or password")
        }*/
    }

    return (

        <>
            <div className='reges_login'>
                <div className="container" id="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            {/* <!-- Sign In Form --> */}
                            <form action="#" className="sign-in-form">
                                <h2 className="title">Sign in</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Email" value={lemail} onChange={(e)=>setLEmail(e.target.value)}/>
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" value={lpassword} onChange={(e)=>setLPassword(e.target.value)}/>
                                </div>
                                <button className="btn solid" onClick={handelLogIn}>Login</button>
                                <p className="social-text"></p>
                                <div className="social-media">

                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                        <div className="signtext">Sign In With Email</div>
                                    </a>

                                </div>
                            </form>

                            {/* <!-- Sign Up Form --> */}
                            <form action="#" className="sign-up-form">
                                <h2 className="title">Sign up</h2>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" value={name} onChange={(e)=>setName(e.target.value)} />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                                </div>
                                <button className="btn" onClick={handelSignUp}>Sign up</button>
                                <p className="social-text"></p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                        <div className="signtext">Sign Up With Email</div>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* <!-- Panels --> */}
                    <div className="panels-container">
                        {/* <!-- Left Panel --> */}
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here ?</h3>
                                <p>
                                    Hello! Enter your details and start journey with us!
                                </p>
                                <button className="btn transparent" id="sign-up-btn" onClick={showSignUp}>
                                    Sign up
                                </button>
                            </div>
                            <img src="IMG/register.svg" className="image" alt="" />
                        </div>

                        {/* <!-- Right Panel --> */}
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>
                                    To keep connected with us please login with your credentials.
                                </p>
                                <button className="btn transparent" id="sign-in-btn" onClick={showSignIn}>
                                    Sign in
                                </button>
                            </div>
                            <img src="IMG/register.svg" className="image" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register