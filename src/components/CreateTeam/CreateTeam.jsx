import React, { useState } from 'react';
import { useTeamContext } from '../../context/Team_context';
const baseUrl = 'http://localhost:5000'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateTeam = () => {
    const {teams} =useTeamContext()
    const [teamName ,setTeamName]=useState()
    const handleAddTeam =async(e)=>{
        e.preventDefault()
        const submitbutton = document.getElementById('submit')

        submitbutton.disabled = true
        try{
            const res =await fetch(`${baseUrl}/api/teams`,{
                method: "POST",
                headers: {
                   "Content-Type": "application/json",
                   
               },
                     
                 body:JSON.stringify({teamName,teams})
                

            })
            const result =await res.json()
            const input = document.querySelectorAll('input')
            //--------------------------------------------------------- clear input value ----------------------------------------------
            for (const i of input) {
                i.value = ''
            }
            if(result.result =='success'){
               toast("Team Created");
            submitbutton.disabled = false
      
            }

        }catch(e){

        }

    }
    return (
        <div className='px-1'>
                     <ToastContainer />
            <h1 className='text-4xl font-semibold py-3 text-center'>Create Teams</h1>
            {teams?.map((team,index)=><div key={index}><details className='w-[250px] shadow-lg mx-auto border-2 border-solid border-blue-500 my-2 rounded-md'>
                <summary className='flex justify-between items-center'><h3>{team.first_name} {team.last_name}</h3> <img src={team.avatar} alt="" className='border-blue-400 border-solid border-2 rounded-full h-3/6'/></summary>
                <h4><span className='text-blue-500 font-semibold py-1'>Gender:</span> {team.gender}</h4>
           <h4><span className='text-blue-500 font-semibold py-1'>Domain:</span> {team.domain}</h4>
           <h4 className=''><span className='text-blue-500 font-semibold py-1'>Email:</span> {team.email}</h4>
         
                </details></div>)}
                <form action=""onSubmit={handleAddTeam}>
                <div className='flex justify-center items-center flex-col py-2 '>
                  <span>Team Name:</span>
                  <input   type="text" name="" id="" onChange={(e)=>{setTeamName(e.target.value)}} placeholder='Team name 'className='px-3 outline-none border-solid border-blue-500 border-2 w-[250px] rounded-md' required/>
               </div>
               <button type="submit" id='submit' className='bg-blue-500 py-1 px-10 text-white rounded my-2 mx-auto block'>Create Team</button>

                </form>
            
               
        </div>
    );
};

export default CreateTeam;