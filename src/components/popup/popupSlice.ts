import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type PopupType = 'rules' | 'training' | null

type PopupState = {
  isOpen: boolean
  popupType: PopupType
}

const initialState: PopupState = {
  isOpen: false,
  popupType: null,
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  // В reducers — список разрешённых состояний.
  // action — объект-команда.
  // payload — поле внутри action, где лежат данные этой команды.
  // PayloadAction подсказывает TS, что action.payload = 'rules' | 'training'.
  reducers: {
    openPopup: (state, action: PayloadAction<'rules' | 'training'>) => {
      state.isOpen = true
      state.popupType = action.payload
    },
    closePopup: (state) => {
      state.isOpen = false
      state.popupType = null
    },
  },
})

export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer