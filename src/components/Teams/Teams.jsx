import React, { useEffect, useState } from 'react';
const baseUrl = 'http://localhost:5000'

const Teams = () => {
    const [teams, setTeams] = useState()
    useEffect(() => {
        (async () => {
            const res = await fetch(`${baseUrl}/api/teams`)
            const result = await res.json()
            
            setTeams([...result])

        })()
    }, [])
    return (
        <div className='flex justify-center px-1'>
            {
                teams?.map((team, index) => <details key={index} className='w-[250px] shadow-lg mx-auto border-2 border-solid border-blue-500 my-2 rounded-md'>
                    <summary className='flex justify-center items-center'><h3 className='text-2xl font-semibold capitalize'>{team.teamName}</h3> </summary>
                    {team?.teams?.map((team, index) => <div className='px-1 py-1 border-b-2 border-blue-300' key={index}>
                        <h4><span className='text-blue-500 font-semibold py-1'>Name:</span> {team.first_name} {team.last_name}</h4>
                        <h4><span className='text-blue-500 font-semibold py-1'>Gender:</span> {team.gender}</h4>
                        <h4><span className='text-blue-500 font-semibold py-1'>Domain:</span> {team.domain}</h4>
                        <h4 className=''><span className='text-blue-500 font-semibold py-1'>Email:</span> {team.email}</h4>
                    </div>)}
                </details>)
            }

        </div>
    );
};

export default Teams;