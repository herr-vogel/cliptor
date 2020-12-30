import { combineReducers } from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import { viewSettings } from './reducers/view-settings'

//
// ViewSettings
//
export const PAGE_TYPES = {
  HOME_MODE: 'HOME_MODE',
  GLOBAL_MODE: 'GLOBAL_MODE',
  MIDI_DRIVER_MODE: 'MIDI_DRIVER_MODE'
  // VIEW_SETTINGS_MODE: 'VIEW_SETTINGS_MODE'
}

export const viewSettingsInitState = {
  columns: 18,
  rowHeight: 40,
  isAutoSize: false,
  marginX: 8,
  marginY: 8,
  paddingX: 8,
  paddingY: 8,
  availableDrivers: {
    inputs: {
      None: {
        ccChannels: [],
        noteChannels: []
      }
    },
    outputs: {
      None: {
        ccChannels: [],
        noteChannels: []
      }
    }
  },
  electronAppSettings: {
    isDevConsoleEnabled: true,
    isAllowedToUpdate: false,
    isAutoDownload: false,
    isAllowedPrerelease: false,
    isAllowedDowngrade: false,
    //isWindowSizeLocked: true,
    windowCoords: [0, 0, 600, 800]
  }
}
const {
  reducer: reducerViewSettingss,
  actions: actionsViewSettingss
} = createSlice({
  name: 'viewSettings',
  initialState: viewSettingsInitState,
  reducers: viewSettings
})

export const actionsViewSettings = actionsViewSettingss
export const reducerViewSettings = reducerViewSettingss

export const reducer = combineReducers({
  viewSettings: reducerViewSettings
})
