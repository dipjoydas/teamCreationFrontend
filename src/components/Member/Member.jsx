import React from 'react';
import { MdEdit } from "react-icons/md";  
import { AiFillDelete } from "react-icons/ai";
const baseUrl = 'http://localhost:5000'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useTeamContext } from '../../context/Team_context';

const Member = ({data}) => {
    const {teams,setTeams}=useTeamContext()
    const handleSelectTeam =(member)=>{
        console.log(teams,'teams')
        const indexOfElement =teams.findIndex((team)=>(team.domain).toLowerCase()==(member.domain).toLowerCase())
       
        if((indexOfElement<0)){
            setTeams([...teams,member])
            toast("Member Added");

        }else{
            const teamContainer =[...teams]
            teamContainer[indexOfElement] =member 
            setTeams([...teamContainer])
            toast("Member Added");
           
        }
        
        

    }
    const handleDelete =async(id)=>{
        try{
            const res =await fetch(`${baseUrl}/api/users/${id}`,{
                method:"DELETE",
                
            })
            const result =await res.json()
            if(result.result =='success'){
                toast("Member Deleted");
             submitbutton.disabled = false
       
             }

        

        }catch(e){

        }
    }
    const {_id,first_name,last_name,email,gender,avatar,domain,available} =data
    return (
       <>
        <ToastContainer />
        <div className='w-[250px] shadow-lg mx-1 p-2 rounded-md'>
            
           <div className='border-blue-300 w-[50px] h-[50px] mx-auto  overflow-hidden border-2 border-solid rounded-full'>
           <img src={avatar}  alt="" />
          
           </div>
           <h3 className='text-lg font-medium text-center'>{first_name} {last_name}</h3>
           <h4><span className='text-blue-500 font-semibold py-1'>Gender:</span> {gender}</h4>
           <h4><span className='text-blue-500 font-semibold py-1'>Domain:</span> {domain}</h4>
           <h4 className='text-center'><span className='text-blue-500 font-semibold py-1'></span> {email}</h4>
           <h4 className='text-center'><span className='text-blue-500 font-semibold py-1 text-center'>{available=='true'?'Available':'Not Available'}</span></h4>
          {available=='true'? <button className='bg-blue-500 px-4 py-1 text-white rounded-md mx-auto block my-1'onClick={()=>handleSelectTeam(data)}>Add To Team</button>:''}
          
           <div className='flex justify-between px-5'>
         
           <Link to={`/updatemember/${_id}`}>  <MdEdit className='cursor-pointer' /></Link>
           <AiFillDelete  className='cursor-pointer' onClick={()=>handleDelete(_id)} />
           </div>

            
        </div>
       </>
    );
};

export default Member;