import { useState } from "react";
import PasswordVaildaor from 'passwordVaildator';
import axios from "axios";
import { response } from "express";

function Registration(){
    const [username,setusername]=useState()
    const [email , setemail]=useState();
    const [Password , setPassword]=useState();
    const [error , seterror]=useState();
    const schema = new PasswordVaildaor();
    schema
    .is.min(8)
    .is.max(100)
    .has.digit()
    .has.UpperCase()
    .has.LowerCase()
    .has.not.space()
    const handleSubmit = async()=>{
        let pass =true;
        let error = {};
        if(!Validitor.isEmail(email)){
          error.email = "invalid";
          pass = false;
        }
        if(!schema.Validator(Password)){
            error.Password = "Password with min of 8,max of 100,digit,Uppercase,lowercase and no spaces"
        }
        seterror(error);
        if(pass){
            try{
              const response = await axios.post('/register',{username,email,Password});
              console.log(response.data);
            }
            
            catch(error){
               console.log(error);
            }
        }
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label> Username:
                    <input type="text" name = "username" value={username}onChange={(e)=>
                        setusername(e.target.value)
                    }/>
                </label>
                <label> Email:
                    <input type="text" name = "Email" value={email}onChange={(e)=>
                        setemail(e.target.value)}/>
                </label>
                <label> Password:
                    <input type="text" name = "Password" value={Password}onChange={(e)=>
                        setPassword(e.target.value)}/>
                </label>
                <br/>
                <button type="submit">create account</button>
            </form>
        </div>
    )
}

export default Registration;
