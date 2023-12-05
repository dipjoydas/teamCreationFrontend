import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseUrl = 'http://localhost:5000'
const AddMember = () => {
   const [firstName,setFirstName] =useState()
   const [lastName,setLastName] =useState()
   const [email,setEmail] =useState()
   const [gender,setGender] =useState()
   const [avatar,setAvatar]=useState()
   const [domain,setDomain]=useState()
   const [availabe,setAvailable] =useState()
    const handleAddMember =async(e)=>{
      e.preventDefault()
      const submitbutton = document.getElementById('submit')

      submitbutton.disabled = true
      const member ={
         // name:`${firstName} ${lastName}`,
         first_name:firstName,
         last_name:lastName,
         email,
         gender,
         avatar,
         domain,
         availabe
      }
      const res =await fetch(`${baseUrl}/api/users`,{
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            
        },
              
          body:JSON.stringify(member)
      })
      const result =await res.json()
      const input = document.querySelectorAll('input')
      //--------------------------------------------------------- clear input value ----------------------------------------------
      for (const i of input) {
          i.value = ''
      }
      if(result.result =='success'){
         toast("Member Added");
      submitbutton.disabled = false

      }
      
  

   

    }
    return (
        <div className='flex justify-center items-center flex-col px-1'>
         <ToastContainer />
             <h1 className='text-4xl font-semibold py-3'>Add member</h1>
             <div>
                <form action="" onSubmit={handleAddMember}>
                <div className='flex flex-col py-2'>
                   <span>First Name:</span>
                   <input onChange={(e)=>setFirstName(e.target.value)} type="text" name="" id="" placeholder='first name 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <div className='flex flex-col py-2'>
                   <span>Last Name:</span>
                   <input onChange={(e)=>setLastName(e.target.value)} type="text" name="" id="" placeholder='Last name 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <div className='flex flex-col py-2'>
                   <span>Email:</span>
                   <input onChange={(e)=>setEmail(e.target.value)} type="text" name="" id="" placeholder='Email 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <div className='flex flex-col py-2'>
                   <span>Gender:</span>
                   <input onChange={(e)=>setGender(e.target.value)} type="text" name="" id="" placeholder='Gender 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <div className='flex flex-col py-2'>
                   <span>Avatar:</span>
                   <input onChange={(e)=>setAvatar(e.target.value)} type="text" name="" id="" placeholder='Avatar img url 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <div className='flex flex-col py-2'>
                   <span>Domain:</span>
                   <input onChange={(e)=>setDomain(e.target.value)} type="text" name="" id="" placeholder='Domain 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <div className='flex flex-col py-2'>
                   <span>Available:</span>
                   <input onChange={(e)=>setAvailable(e.target.value)} type="text" name="" id="" placeholder='Available 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' />
                </div>
                <button type="submit" className='bg-black py-1 px-10 text-white rounded mx-auto block' id='submit'>Add</button>
                </form>
             </div>
             

            
        </div>
    );
};

export default AddMember;