import { useEffect } from "react"
import { useState } from "react"

const Signup = () => {

    const [name,setName] = useState('')
    const [gender,setGender] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm,setConfirm] = useState('')
    const [age,setAge] = useState('')
    const [msg,setMsg] = useState('')

    const payload = {
        name,email,gender,password,age
    }

    const handleClick=()=>{
        if(confirm==password){
                fetch('http://localhost:8080/users',{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-type":"application/json"
                }
            })
            setAge('')
            setEmail('')
            setGender('')
            setName('')
            setPassword('')
            setMsg('')
            }else{
                alert('Password does not match')   
                setPassword('')
                setConfirm('')
            }
        
    }

    const handlePass = (password) => {
        if(password.length<8){
            setMsg('Password should be of 8 characters')
        } else if(!password.includes('1'||'2'||'3'||'4'||'5'||'6'||'7'||'8'||'9'||'0')){
            setMsg('Please have a strong password (Password does not contain Numbers)')
        }else if(!password.includes('@'||'#'||'$'||'%'||'^'||'&'||'*'||'!')){
            setMsg('Please have a strong password (Password does not contain special character)')
        }else{
            setMsg("Password is strong")
        }
        
    }
    useEffect(()=>{
        setTimeout(handlePass(password),1000)
    },[password.length])
    

    return (
        <div>
            <input type="text" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="Enter Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
                handlePass(password)
                }} />
            <div>{msg}</div>
            <input type="text" placeholder="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
            <button onClick={handleClick}>Register</button>
        </div>
    )
}

export default Signup