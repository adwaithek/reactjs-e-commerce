







// import React, { useState, useContext } from 'react'
// import {toast} from 'react-toastify';
// import axios from 'axios'
// import {useNavigate} from 'react-router-dom' 

//  import "./register.css"

//  function Register() {

//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const [password,setPassword]=useState("")
//     const navigate=useNavigate()


   
//    const handleSubmit =async (e) => {
//     e.preventDefault();

//     try{
//         const res=await axios.post('/api/v1/auth/register',{
//             name,email,password
//         });
//         if(res.data.success){
// toast.success(res.data.message)
// navigate('/')
//         }else{
//           alert(res.data.error)
//         }
//     }catch(error){
//       console.log(error);
//       toast.error("something went wrong")

//     }
    
//     // toast.success('Register Successfully')
//    }
    

//  return(
//    <div className="bg">
//    <div className="wrapper">
//        <form className="login" onSubmit={handleSubmit}>
//          <p className="title">REGISTER</p>
//          <input  type='email' placeholder='email' required id='email' onChange={(e)=>setEmail(e.target.value)}  />
//          {/* <i></i> */}
//          <input onChange={(e)=>setName(e.target.value)} id="username" className="username" type="text" placeholder="Username" autofocus required />
//          {/* <i className="fa fa-user" /> */}
//          <input  onChange={(e)=>setPassword(e.target.value)}  id="password" className="password"  type="password" placeholder="Password" required />
//          {/* <i className="fa fa-key" /> */}
          

//          <a >Forgot your password?</a>
//          <button>
//            <i className="spinner" />
//            <span   className="">CREATE</span>
//          </button>
//        </form>
       
//        <p />
//      </div>
//      </div>
//    );
//  }


//  export default Register;






import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/layout/Layout";

function Register(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
       
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    
    <div>
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
         
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

