import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  displayName: null,
  email: null,
  phoneNumber:null,
  emailVerified: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) =>{
      console.log(action);
      state.uid = action.payload.uid;
      state.displayName= action.payload.displayName;
      state.email = action.payload.email;
      state.phoneNumber= action.payload.phoneNumber;
      state.emailVerified= action.payload.emailVerified;
    },
  },

});

export const { updateUser } = userSlice.actions;
export const selectUser= (state) => state.user;

export default userSlice.reducer;