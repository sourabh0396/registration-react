import { useState } from "react"
export function LoginForm(){
        const[userDetails,setUserDetails]=useState({UserName:'',Password:'',Email:'',City:'',Gender:''});
        const[error,setErrors]=useState({UserName:'',Password:'',Email:'',City:'',Gender:''});
    

    function handleNameChange(e){
        setUserDetails({
            UserName:e.target.value,
            Password:userDetails.Password,
            Email:userDetails.Email,
            City:userDetails.City,
            Gender:userDetails.Gender
        })
    }
    function handelPasswordChange(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Password:e.target.value,
            Email:userDetails.Email,
            City:userDetails.City,
            Gender:userDetails.Gender
        })
    }
    function handleNameBlur(e){
        if(e.target.value==""){
            setErrors({UserName:'User Name Required'});
        }else{
            setErrors({UserName:''});
        }
    }

    function handleFormSubmit(e){
        e.preventDefault();
        if(userDetails.UserName==""){
            setErrors({
                UserName:'User Name or Email Required'
            })
        }else{
            alert(JSON.stringify(userDetails));
        }
    }


    return(
        <div className="container-fluid">
            <form className="w-25" onSubmit={handleFormSubmit}>
                <h3>Log in</h3>
                <dl>
                    <dt>User Name or Email</dt>
                    <dd><input type="text" className="form-control" onBlur={handleNameBlur} onKeyUp={handleNameBlur} onChange={handleNameChange}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" onChange={handelPasswordChange}></input></dd>
                </dl>
                <button type="submit" className="btn btn-primary w-100">Log in</button>
            </form>
        </div>
    )
}