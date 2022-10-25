import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: localStorage.getItem('token'),
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = localStorage.removeItem('token');
      state.id = null;
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
