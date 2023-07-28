import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsers, updateFollowers } from "../../utils/users-api";

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
      const response = await updateFollowers({
        id,
        updatedFollowers,
        isFollowed,
      });
      dispatch(fetchAllUsersThunk());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
