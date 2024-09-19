

import { configureStore } from '@reduxjs/toolkit'
import reducer from './Todo.slice.js'
const store = configureStore({
    reducer: reducer
}

)

export {store}