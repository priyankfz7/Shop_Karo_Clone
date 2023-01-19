import { useEffect } from "react"
import { useState } from "react"
import { Input,Button,Box,Text,Flex,Image } from '@chakra-ui/react'
import logo from '../Components/Logo/mall_logo.png'



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
        if(payload.name.length>0&&payload.gender.length>0&&payload.age.length>0){
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
            setConfirm('')
            }else{
                alert('Password does not match')   
                setPassword('')
                setConfirm('')
            }
        }else{
            alert('Fill all the details to proceed')
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
    },[password.length,password])
    

    return (
        <Box bgColor='purple.50'>
            <Box>
                <Flex direction={['column','column','row','row']}>
                <Box>
                    <Image m='auto' w={['70%','70%','30%','30%']} src={logo} alt="" />
                </Box>
                <Box>
                    <Flex direction='column'>
                    <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','24%','24%']} variant='flushed' type="text" placeholder="Enter Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
                    <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','24%','24%']} variant='flushed' type="text" placeholder="Enter Gender" value={gender} onChange={(e)=>setGender(e.target.value)} />
                    <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','24%','24%']} variant='flushed' type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)} />
                    <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','24%','24%']} variant='flushed' type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <Input mt='2%' h={['30px','40px','60x','60px']} m='auto' w={['90%','90%','24%','24%']} variant='flushed' type="password" placeholder="Enter Password" value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                    handlePass(password)
                    } } />
                    <Text m='auto'>{msg}</Text>
                    <Input mt='2%' h={['30px','40px','60x','60px']} mb='4%' m='auto' w={['90%','90%','24%','24%']} variant='flushed' type="password" placeholder="Confirm Password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} />
                    </Flex> 
                <Box>
                    <Button m='auto' mt='10px' w={['90%','90%','24%','24%']} onClick={handleClick}>Register</Button>
                </Box>
                   
                </Box>
                </Flex>
                

            
            </Box>
            
            
            
            
        </Box>
    )
}

export default Signup