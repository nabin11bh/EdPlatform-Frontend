import { useAppSelector } from "@/lib/store/hooks"
import { useSelector } from "react-redux"


function About(){
    // userSlice --> name, address ma j baseko xa tyo chayeeko / fetch 
   const data =  useAppSelector((store)=>store.) // initialState ko access paunu vayo 
   
  data.name 
  data.address 
    return(
        <h1>This is about page</h1>
    )
}


export default About