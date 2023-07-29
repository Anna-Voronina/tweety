import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllUsersThunk, updateUserFollowersThunk } from "./operations";

const initialState = {
  users: [],
  limit: 3,
  followingInProgress: [],
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
  reducers: {
    filterFollowingInProgress(state, { payload }) {
      payload.isFollowing
        ? state.followingInProgress.push(payload.id)
        : (state.followingInProgress = state.followingInProgress.filter(
            (id) => id !== payload.id
          ));
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload.users;
        state.limit = payload.limit;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserFollowersThunk.fulfilled, (state) => {
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
export const { filterFollowingInProgress } = usersSlice.actions;
