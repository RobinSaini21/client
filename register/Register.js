import React from "react";
import { Formik,Field } from "formik";
import * as Yup from 'yup';
import { Input, Link } from "@material-ui/core";
import MyGoolgeLogin from "../GoogleLogin/GoolgeLogin";
import Facebook from "../GoogleLogin/FacebookLogin";
import { useState } from "react";
import store from "../../Store";
import { apiregister } from "../../services/AuthApi";
import { useNavigate } from "react-router";
import './Register.css'
import axios from "axios";


// const Schema = Yup.object().shape({
//   password: Yup.string().required("This field is required"),
//   changepassword: Yup.string().when("password", {
//     is: val => (val && val.length > 0 ? true : false),
//     then: Yup.string().oneOf(
//       [Yup.ref("password")],
//       "Both password need to be the same"
//     )
//   })
// });
const Register = () => {
  const Navigate = useNavigate()
  const intialData = {
    email: "",
   password: "",
    confirm_password: "" 
  }
  const registrationSchema = (values) => {
    const errors = {};
    if (!values.email) {
      document.getElementById("email").style.borderColor = "red"
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
      document.getElementById("password").style.borderColor = "red"
    }
    else if(values.password.length  > 20){
    
      errors.password = "password must be 20 characters or less"
    }
    // else if(values.password  != strongRegex ){
    //   errors.password = "Password is not strong enough"
    // }
   else if(!/\d/.test(values.password)){
     errors.password = "strong password"
   }
   if(values.confirm_password != values.password){
   
     errors.confirm_password = "password is not matching"
     document.getElementById("password_confirm").style.borderColor = "red"

   }
    return errors;
  }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user, 
  //     [name]: value,
  //   });
  // // };
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
 
  //    store.dispatch({
  //      type: "ADD_DETAILS",
  //      payload: { 
  //        email: values.email,
  //        password: values.password,
  //      },
  //    });



// const Email = user.email;
// const Password = user.password
//      const ruser = {Email, Password }  
//      apiregister(user)
    //  if (Email && Password) {
    //    axios.post(process.env.REACT_APP_REGISTER_API_URL,ruser)
    //    //`${process.env.REACT_APP_REGISTER_API_URL}`,
    //      .then((res) => console.log(res));
    //  } else {
    //    alert("invalid input");
    //  }
  // };

  const [user, setUser] = useState({
    email: "",
    password: "",
    // confirm_password: ""
  });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({
  //     ...user, 
  //     [name]: value,
  //   });
  // };
 return(
  <div>
    <Formik
    
      initialValues={intialData}
      
      // validationSchema={Schema}
      validate={registrationSchema}
      onSubmit={(values, { setSubmitting }) => {
        // store.dispatch({
        //   type: "ADD_DETAILS",
        //   payload: { 
        //     email: values.email,
        //     password: values.password,
        //   },
        // });
        // console.log(
        //   store.dispatch({
        //     type: "ADD_DETAILS",
        //     payload: { 
        //       email: values.email,
        //       password: values.password,
        //     },
        //   })
        // )
        const email = values.email;
const password = values.password;
console.log((email,password))

       const ruser = {email, password }
      //  localStorage.setItem("user_auth_data",email)
      //  localStorage.setItem("user_auth_data",password)
      //  Navigate("/product_launchboard")  
     axios.post("http://localhost:5000/Register", ruser).then((res) => {
       console.log(res)
       console.log(res.data)
        alert(res.data.message);
       const token = res.data.token
       console.log(token)

 if(token){
   Navigate("/basicuser")
 } 
//    console.log(
//     dispatch(loginSuccess(email,token))
//       )
    });
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
      <form type="submit" onSubmit={handleSubmit} id="form" class="mb-3 row d-flex justify-content-end">
<div class=" w-50 p-3" >
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control"    id="email"
         placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email} />
</div>
   <span style={{color: "red"}}>{ errors.email}</span>
<div class=" w-50 p-3">
 <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" 
  class="form-control"  id="password"
          placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password} />
</div>
  <span style={{color:"red"}}>{errors.password }</span>
  <div class=" w-50 p-3" >
  <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
  <input type="email" class="form-control"  
     id="password_confirm"
     placeholder="Confirm Password"
              type="confirm_password"
              name="confirm_password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirm_password} />
</div>
 <span class="error" style={{ color: "red" }}>{errors.confirm_password}</span>
   {/* <button className="btn_4" type="submit" disabled={isSubmitting}>
            Submit
          </button> */}
          <div class=" w-50 p-3" >
 <button class="btn btn-primary"> Submit</button>
</div>
      </form>
      )}
    
    </Formik>
  </div>
 )
  
      };

export default Register;