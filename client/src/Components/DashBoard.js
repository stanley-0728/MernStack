import React,{useState} from 'react'
import axios from 'axios'
import Navbar from './NavBar'
const Dashboard = () => {
 const [loginData ,setLoginData] = useState({
     username:"",
     email:"",
     phoneNumber:"",
     address:"",
     errors:{}
 })
 const onChange = (e) =>
 {
   const name= e.target.name;
   const value=e.target.value;
  setLoginData({...loginData,[name]:value});
 };

const onSubmit = (e) => {
        e.preventDefault();
          axios({
              url:"/api/private/save",
              method:"POST",
              data:{
                username:loginData.username,
                email:loginData.email,
                phoneNumber:loginData.phoneNumber,
                address:loginData.address
              },
          })
          .then(response =>{
              alert(response.data.message)
          })
          .catch (error => {
            const message=error.response.data
           setLoginData({...loginData,errors:message})
          })
          

      };
     
    return (
        <div><Navbar/>
        <div className="d-flex align-items-center light-blue-gradient " >
            <div    className="container" >
                <div className="d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card rounded-0 shadow w-100">
                            <div className="card-body">
                            {loginData.errors.error&&<div className="card-title bg-danger p-2 text-centre">{loginData.errors.error}</div>}

                                <form onSubmit={(e)=>onSubmit(e)} >
                                    <div className="form-group p-1">
                                        <label  style={{color:"black"}}>UserName</label>
                                        <input 
                                        className="form-control"
                                          placeholder="Enter Username"
                                          name="username"
                                          value={loginData.username}  
                                      onChange={(e) => onChange(e)}
                                          />
                              {loginData.errors.username&& <span style={{color:"red"}}>{loginData.errors.username}</span>}
                                    </div>
                                    <div className="form-group p-1">
                                        <label style={{color:"black"}}>Enter Email</label>
                                        <input type="email"
                                        className="form-control"
                                          placeholder="Enter email"
                                          name="email"
                                          value={loginData.email}
                                          onChange={(e)=>onChange(e)}
                                          />
                              {loginData.errors.email&& <span style={{color:"red"}}>{loginData.errors.email}</span>}

                                    </div>
                                    <div className="form-group p-1">
                                        <label style={{color:"black"}}>Enter Phone Number</label>
                                        <input 
                                        className="form-control"
                                          placeholder="Enter Number"
                                          name="phoneNumber"
                                          value={loginData.phoneNumber}
                                          onChange={(e)=>onChange(e)}
                                          />
                              {loginData.errors.phoneNumber&& <span style={{color:"red"}}>{loginData.errors.phoneNumber}</span>}

                                    </div>
                                    <div className="form-group p-1">
                                        <label style={{color:"black"}}>Enter Address</label>
                                        <input
                                        className="form-control"
                                          placeholder="Enter Address"
                                          name="address"
                                          value={loginData.address}
                                          onChange={(e)=>onChange(e)}
                                          style={{height:"100px"}}
                                          />
                              {loginData.errors.address&& <span style={{color:"red"}}>{loginData.errors.address}</span>}

                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                </div>
                </div>
    )
}

export default Dashboard;
