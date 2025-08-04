import { Status } from "@/lib/types/types";


export enum TeacherExpertise{
    Begineer = "begineer", 
    Intermediate = "intermediate", 
    Pro = "pro"
}

interface IInstituteTeacherInitialDataTeacherCourse{
    courseName : string, 
    coursePrice : string, 
    courseThumbnail : string
}

export interface IInstituteTeacherInitialDataTeacher{
teacherName : string | null,
teacherEmail :string | null ,
id : string,
teacherPhoneNumber : string,
teacherExpertise : TeacherExpertise ,
teacherSalary : string,
teacherJoinedDate : string, 
teacherPhoto : string, 
}

interface IInitialTeacherDataWithCourse extends IInstituteTeacherInitialDataTeacher{
id: string;
course ?: IInstituteTeacherInitialDataTeacherCourse

}



export interface IInstituteTeacherInitialData{
    teachers : IInitialTeacherDataWithCourse[], 
    status : Status
}