import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialTeacherData, ITeacher } from "./teacherSlice.types";
import { Status } from "@/lib/types/types";

const initialState:IInitialTeacherData = {
teacher : {
    teacherEmail : "", 
    teacherName : "", 
    teacherPhoneNumber : ""
}, 
status : Status.LOADING
}

const teacherSlice = createSlice({
    name : "teacher", 
    initialState : initialState, 
    reducers : {
        setTeacher(state:IInitialTeacherData,action:PayloadAction<ITeacher>){
            state.teacher = action.payload
        }, 
        setStatus(state:IInitialTeacherData,action:PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

const {setTeacher,setStatus} = teacherSlice.actions
export default teacherSlice.reducer
