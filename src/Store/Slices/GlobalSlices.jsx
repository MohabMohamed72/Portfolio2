import { createSlice } from "@reduxjs/toolkit";

export const GlobalSlice = createSlice({
    initialState:{
        SidebarVisable:false,
    },
    name:'GlobalSlice',
    reducers:{
        ShowSidebar:(state)=>{
            return {...state ,SidebarVisable:true }
        },
        HideSidebar:(state)=>{
            return {...state ,SidebarVisable:false }
        }
    }
})

export const {ShowSidebar ,HideSidebar}  =GlobalSlice.actions
export default GlobalSlice.reducer