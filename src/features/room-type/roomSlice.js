import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roomRequests : [
      {
          id: 1,
          number: 101,
          type: "Deluxe Single",
          floor: 1,
          status: "AVAILABLE",
          isMaintained: false
      },
      {
          id: 2,
          number: 102,
          type: "Deluxe Single",
          floor: 1,
          status: "AVAILABLE",
          isMaintained: false
      },
      {
        id: 3,
        number: 103,
        type: "Deluxe Twin",
        floor: 1,
        status: "OCCUPIED",
        isMaintained: false
    }
  ] 
  
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        addRoom : (state,{payload}) => {
            return {
                ...state,
                roomRequests: [...state.roomRequests,...payload]
            }
        }
    }
})

export const {addRoom} = roomSlice.actions;
export default roomSlice.reducer;

export const selectAllRooms = (state) => state.room.roomRequests;