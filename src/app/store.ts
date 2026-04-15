import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/api'
import popupReducer from '../components/popup/popupSlice'
import galleryReducer from '../components/gallery/gallerySlice'

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        popup: popupReducer,
        gallery: galleryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch