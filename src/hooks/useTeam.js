import React, { useState } from 'react';

const useTeam = () => {
    const [teams,setTeams]=useState([])
    return {
        teams,
        setTeams
    };
};

export default useTeam;