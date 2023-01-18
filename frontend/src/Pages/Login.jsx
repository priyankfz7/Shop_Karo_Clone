import { useState } from "react"

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const payload = {
        email,password
    }

    const handleClick=()=>{
        fetch('http://localhost:8080/userssign',{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{
                "Content-type":"application/json"
            }
        }).then(res=>res.json()).then(res=>{
            if(res.token){
                localStorage.setItem('token',res.token)
            }else{
                localStorage.setItem('token',123)
            }
        }).catch(err=>console.log(err))

        setEmail('')
        setPassword('')
    }


    return (
        <div>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleClick}>Log in</button>
        </div>
    )
}

export default Login