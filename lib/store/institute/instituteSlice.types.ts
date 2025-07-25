import { Status } from "@/lib/types/types"



export interface IInstitute {
    instituteName : string, 
    instituteNumber : string,
   instituteEmail : string,
   institutePhoneNumber : string,
   instituteAddress:string,
   institutePanNumber ?: string, 
   instituteVatNumber ?: string
}

export interface IInstituteInitialData{
    institute : IInstitute, 
    status : Status
}