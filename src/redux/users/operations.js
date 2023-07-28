import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsers, updateFollowers } from "../../utils/users-api";

export const fetchAllUsersThunk = createAsyncThunk(
  "users/fetchAll",
  async (limit, { rejectWithValue }) => {
    try {
      const users = fetchAllUsers(limit);
      return users;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserFollowersThunk = createAsyncThunk(
  "users/updateUserFollowers",
  async ({ id, updatedFollowers, isFollowed }, { rejectWithValue }) => {
    try {
      const response = await updateFollowers({
        id,
        updatedFollowers,
        isFollowed,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
