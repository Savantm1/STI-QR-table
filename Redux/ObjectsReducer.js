import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "../API";

export const getObjects = createAsyncThunk(
    "objects",
    async() => {
        return await API.fetchObjects();
    }
)

export const objectsSlice = createSlice({
    name: 'objects',
    initialState: {
        objects: [
            {"code": "27", "name": "Офис/Склад"}, 
            {"code": "346", "name": "Октафарма - Скопин"},
            {"code": "353", "name": "Сухаревский"},
            {"code": "358", "name": "Завидово Меркури"},
            {"code": "288", "name": "ГЭС-2"},
            // {"code": "27", "name": "Строительство"},
            // {"code": "27", "name": "Прочерк"},
            // {"code": "279", "name": "Резерв ИЖД РОМАН Г"},

        ],

    },
    reducers: {
        // setType(state,action){
        //     state.type = action.payload;
        // },
    },
    extraReducers:{
        [getObjects.fulfilled]: (state,action) => {

            console.log("ACTION FETCH",action.payload.array);
            state.objects = action.payload.array;
        }
    }
  })

//   export const { setType} = objectsSlice.actions
  export default objectsSlice.reducer