import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacherInitialData, IInstituteTeacherInitialDataTeacher, TeacherExpertise } from "./institute-teacher-type";
import { Status } from "@/lib/types/types";
import { AppDispatch } from "../../store";
import {APIWITHTOKEN} from "@/lib/http/index";


const initialState:IInstituteTeacherInitialData = {
    teachers :[], 
    status : Status.LOADING
}


const insituteTeacherSlice = createSlice({
    name : "institute-teacher", 
    initialState : initialState, 
    reducers : {
        setStatus(state:IInstituteTeacherInitialData, action : PayloadAction<Status>){
            state.status = action.payload
        }, 
        setTeacher(state:IInstituteTeacherInitialData, action:PayloadAction<IInstituteTeacherInitialDataTeacher>){
            state.teachers.push(action.payload)
        }
    }
})

export const {setStatus,setTeacher} = insituteTeacherSlice.actions
export default insituteTeacherSlice.reducer

export function createInstituteTeacher(data:IInstituteTeacherInitialDataTeacher){
    return async function createInstituteTeacherThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("/institute/teacher",data )
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}

export function fetchInsituteTeacher(){
    return async function fetchInsituteTeacherThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.get("/institute/teacher")
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
               response.data.data.length > 0 && dispatch(setTeacher(response.data.data))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}

export function deleteInsituteTeacherById(id:string){
    return async function deleteInsituteTeacherByIdThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.delete("/institute/teacher/" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
               // popout teacher of that id from slice too 
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}