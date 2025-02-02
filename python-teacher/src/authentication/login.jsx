import {useState} from 'react';
import './login.css';

function Login(proms){

    const [NotUser , setUser] = useState(true);
    const [warning,setWarning] = useState("");
    

   

   function userstate(){
        setUser((prev)=>{
           return !prev;
        })
    }
    function handleForm(event) {
        event.preventDefault();
        if (NotUser){
        const {email , password , cpassword} = event.target;
        console.log(email.value);
        if(password.value!==cpassword.value){
            setWarning("Password Miss Mached Try Again !")
        }else{
            setWarning("")
            proms.userDetails();
        }
         }else{
            const {email , password } = event.target;
            console.log(password.value);
            console.log(email.value);
            proms.userDetails();
        }
        }
    return(
        <div className="login_container">
            <div className="form">
                <form onSubmit={handleForm}>
                {NotUser?<h1>Sign Up</h1>:<h1>Sign In</h1>}
                <input type="text" id='username'  placeholder='UserName/email'name='email' required/>
                <input type="password" id='password' placeholder='Password' name='password' required/>
                {NotUser?
                <input type="password" id='c_password' placeholder='Confirm Password' name='cpassword' required/>:null}
                {NotUser?<span className='userstate' onClick={userstate}>Already have account Login</span>:<span className='userstate' onClick={userstate}>do not have an Account ! Register</span>}
             <div className="submit">
             <button className="btn btn-primary" type='submit'>{NotUser?<span>Sing Up</span>:<span>Sing In</span>}</button>
             </div>
             <p style={{color:"red" ,fontSize:"20px"}}>{warning}</p>
             </form>
             </div>    
        </div>
    );
}


export default Login 

