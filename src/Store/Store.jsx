import {configureStore} from '@reduxjs/toolkit'
import  GlobalSlice  from './Slices/GlobalSlices'


export const store = configureStore({
    reducer:{
        GlobalSlice:GlobalSlice
    }
})