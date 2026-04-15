import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface GalleryItemState {
  activeIndex: number
}

interface GalleryState {
  galleries: Record<string, GalleryItemState>
}

const initialState: GalleryState = {
  galleries: {
    mainGallery: { activeIndex: 0 },
  },
}

const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    setActiveIndex(
      state,
      action: PayloadAction<{ galleryId: string; activeIndex: number }>
    ) {
      const { galleryId, activeIndex } = action.payload

      if (!state.galleries[galleryId]) {
        state.galleries[galleryId] = { activeIndex: 0 }
      }

      state.galleries[galleryId].activeIndex = activeIndex
    },
  },
})

export const { setActiveIndex } = gallerySlice.actions
export default gallerySlice.reducer