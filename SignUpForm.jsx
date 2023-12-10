import { useState } from "react";
import { useFormik } from "formik";
import mongoose from "mongoose";
import Axios from "axios";
export function SignUpForm(){


    function ValidateUser(UserDetails){
        var error={UserName:'',Password:'',Email:'',Confirm_Password:''};

        mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

        const handleSubmit = (e) => {
            e.preventDefault();
      
            Axios.post('http://localhost:4000', {
                UserName:'',
                Password:'',
                Email:'',
                Confirm_Password:''
            })
        }

        if(UserDetails.UserName==""){
            error.UserName="User Name Required";
        }else{
            if(UserDetails.UserName.length<4){
                error.UserName="Name is to short";
            }
            else{
                error.UserName="";
            }
        }
        if(UserDetails.Password==""){
            error.Password="Password Required";
        }
        if(UserDetails.Email=""){
            error.Email="";
        }else{
            if(UserDetails.Email.match){
                error.Email="";
            }else{
                error.Email="Email required";
            }
        }
        if(UserDetails.Confirm_Password==""){
            error.Confirm_Password="Plese Confirm Password";
        }
        return error;
    }


    
    const formik = useFormik({
        initialValues:{
            UserName:'',
            Password:'',
            Email:'',
            Confirm_Password:''
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values));
        }
    })


    return(
        <div className="container-fluid">
            <form className="w-25" onSubmit={formik.handleSubmit}>
                <h3>Sign Up</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" name="UserName" className="form-control" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="Password" className="form-control" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="Email" className="form-control" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Confirm_Password</dt>
                    <dd><input type="Confirm_Password" name="Confirm_Password" className="form-control" onChange={formik.handleChange}></input></dd>
                    <dd className="text-danger">{formik.errors.Confirm_Password}</dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
        </div>
    )
}