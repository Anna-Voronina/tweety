import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsers, updateFollowers } from "../../utils/users-api";
import { filterFollowingInProgress } from "./slice";

export const fetchAllUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const users = fetchAllUsers();
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserFollowersThunk = createAsyncThunk(
  "users/updateUserFollowers",
  async (
    { id, updatedFollowers, isFollowed },
    { dispatch, rejectWithValue }
  ) => {
    try {
      dispatch(filterFollowingInProgress({ isFollowing: true, id }));
      const response = await updateFollowers({
        id,
        updatedFollowers,
        isFollowed,
      });
      dispatch(filterFollowingInProgress({ isFollowing: false, id }));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
