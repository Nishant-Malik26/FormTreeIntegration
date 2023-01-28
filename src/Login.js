import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
const info = [
    {
        email : 'nishant@abc.com',
        password: 'Dragon11@'
    },
    {
        email : 'prerna@abc.com',
        password: 'Dragon12@'
    },
    {
        email:'abc',
        password:'123'
    }
]



//const[auth,setAuth] = useState(false);

//const[email,setEmail] =useState('');
//const[password,setPassword] =useState('');

const[obj, setObj] = useState({})

const navigate = useNavigate();

// function handleSubmit(e) {
//     e.preventDefault();

//     flag = info.find((person)=>{
//     if(person.email === 'nishant@abc.com' && person.password === 'Dragon11@'){
//        // setAuth(true)
//        console.log(auth)
//        setAuth(true)

//        console.log(auth)

//         return true;
//     }
//     else return false;
// })
// }


function handleSubmit(e) {
    e.preventDefault();
    const arr =info.filter((entry)=>{return entry.email=== obj.email && entry.password=== obj.password})
    if(arr.length>0){
        navigate('/Welcome')
    }
    else navigate('/error')
   

}

  return (

    <>
    <form >
    <label>Email</label><input onChange={(e)=> {setObj({...obj,email:e.target.value})}} type="email" value={obj.email}/>
    <label>Password</label><input onChange={(e)=> {setObj({...obj,password:e.target.value})}} type="password" value={obj.password}/>
    <button type="submit" onClick={handleSubmit}>Login</button>
    </form>
    </>
  )
}

export default Login