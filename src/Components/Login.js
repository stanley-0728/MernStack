import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {motion} from 'framer-motion'
const content={
    hidden:{
      opacity:0,
      x:"250vw"
    },
    visible:{
      opacity:1,
      x:"0"
    },
    transition:{
      type :'spring',
      damping: 10,
  stiffness: 50
    },
  }
 
const Login = ({history}) => {
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [errors,setErrors] = useState({});
 useEffect(()=>{
    if (localStorage.getItem("authToken")) {
        history.push("/dashboard");
      }
},[history]);
const onSubmit = (e) => {
        e.preventDefault();
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
        axios({
            url:`/api/auth/login`,
            method:"POST",
            data:{
                email,
                password
            }
        },config)
        .then(response=>
            {
                localStorage.setItem("authToken", response.data.token);
                history.push('/dashboard')
            })
        .catch(error => {
          console.log(error.response.data)
          setErrors(error.response.data)
        })

      };
     
    return (
        <div className="d-flex align-items-center light-blue-gradient " >
            <motion.div
           variants={content}
            initial="hidden"
            animate="visible"
            className="container" >
                <div className="d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card rounded-0 shadow">
                            <div className="card-body">
                            {errors.error&&<div className="card-title bg-danger p-2 text-centre">{errors.error}</div>}

                                <form onSubmit={(e)=>onSubmit(e)} >
                                    <div className="form-group p-1">
                                        <label  style={{color:"black"}}>Email address</label>
                                        <input 
                                        type="email" 
                                        className="form-control"
                                          placeholder="Enter email"
                                          value={email}  
                                      onChange={(e) => setEmail(e.target.value)}
                                          />
                              {errors.email&& <span style={{color:"red"}}>{errors.email}</span>}
                                    </div>
                                    <div className="form-group p-1">
                                        <label style={{color:"black"}}>Password</label>
                                        <input type="password"
                                        className="form-control"
                                          placeholder="Password"
                                          value={password}
                                          onChange={(e)=>setPassword(e.target.value)}
                                          />
                              {errors.password&& <span style={{color:"red"}}>{errors.password}</span>}

                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                                    <div className="mt-2 " >
                                        <h5 style={{color:"blue"}}>Don't Have an account  <Link to="/register" className="txt-primary"><span> Sign Up</span></Link></h5>
                                       
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                </motion.div>
                </div>
    )
}

export default Login;
