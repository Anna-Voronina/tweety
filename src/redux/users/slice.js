import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllUsersThunk, updateUserFollowersThunk } from "./operations";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const handleRejectedStatus = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const handlePendingStatus = (state) => {
  state.isLoading = true;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserFollowersThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(fetchAllUsersThunk.pending, updateUserFollowersThunk.pending),
        handlePendingStatus
      )
      .addMatcher(
        isAnyOf(fetchAllUsersThunk.rejected, updateUserFollowersThunk.rejected),
        handleRejectedStatus
      ),
});

export const usersReducer = usersSlice.reducer;
