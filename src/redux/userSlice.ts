import { createSlice } from "@reduxjs/toolkit";

interface userState {
  token: string | null;
  err: string | null;
}

const initialState: userState = {
  token: null,
  err: null,

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      if (
        action.payload.login === "admin" &&
        action.payload.password === "12345"
      ) {
        state.token = '123456';
        state.err = null;
        
      } else {
        state.token = null;
        state.err = "Ім'я користувача або пароль введено неправильно.";
      }
    },
    logoutUser(state) {
      state.token = null;
      state.err = null;
      localStorage.removeItem("user");
    },
  },
});

export const { logoutUser, setUser } = userSlice.actions;
export default userSlice.reducer;
