import { createContext, useContext } from "react";
import useTeam from "../hooks/useTeam";

const TeamContext =createContext()
const TeamProvider =({children})=>{
    return <TeamContext.Provider value={useTeam()}>{children}</TeamContext.Provider>
}
const useTeamContext =()=>{
    return useContext(TeamContext)
}
export {TeamProvider,useTeamContext}