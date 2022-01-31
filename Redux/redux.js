import { configureStore } from '@reduxjs/toolkit'
import ObjectsReducer from './ObjectsReducer'
import TimerReducer from './TimerReducer'

export default configureStore({
    reducer: {
          timer: TimerReducer,
          objects: ObjectsReducer
    }
})
